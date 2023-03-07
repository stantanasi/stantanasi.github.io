import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col } from 'react-bootstrap';
import { GitHubLanguages, GitHubProject } from '../../types/GitHub';

export const Languages = ({ languages_url }: { languages_url: string }) => {
  const [languages, setLanguages] = useState<GitHubLanguages>({})

  useEffect(() => {
    fetch(languages_url)
      .then((response) => response.json())
      .then((data: GitHubLanguages) => setLanguages(data))
  }, [languages_url])

  const total = Object.values(languages).reduce((a, b) => a + b, 0);

  return (
    <div className="pb-3">
      <span>Langages : </span>
      <span>
        {Object.entries(languages).map(([language, val], index) => (
          <Badge
            key={index}
            bg="light"
            className="me-1"
            text="dark"
          >
            {language}: {(100 * val / total).toFixed(1)} %
          </Badge>
        ))}
      </span>
    </div>
  )
}


type Props = {
  project: GitHubProject;
}

export default function Project({ project }: Props) {
  return (
    <Col md={6}>
      <Card
        bg="white"
        className="mb-5 p-3 shadow-lg"
      >
        <Card.Body>
          {project.homepage ? (
            <a href={project.homepage ?? ""} rel="noopener noreferrer" target="_blank">
              <Card.Title as="h5">{project.name}</Card.Title>
            </a>
          ) : (
            <Card.Title as="h5">{project.name}</Card.Title>
          )}
          <Card.Text>{project.description}</Card.Text>

          <div className="d-flex gap-2">
            <Button
              href={project.svn_url}
              variant="outline-secondary"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span> Repo</span>
            </Button>
          </div>

          <hr />

          <Languages languages_url={project.languages_url} />

          <Card.Text className="d-flex justify-content-between">
            <span className="d-flex gap-2">
              <Badge bg="light" text="dark">
                <FontAwesomeIcon icon={faStar} />
                <span> {project.stargazers_count}</span>
              </Badge>
              <Badge bg="light" text="dark">
                <FontAwesomeIcon icon={faCodeFork} />
                <span> {project.forks_count}</span>
              </Badge>
            </span>
            <small className="text-muted">
              Modifié le {new Date(project.pushed_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
