import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { GitHubProject } from '../../types/GitHub';
import Project from './Project';

export default function Projects() {
  const [projects, setProjects] = useState<GitHubProject[]>([])

  useEffect(() => {
    setProjects([])

    fetch('https://api.github.com/users/stantanasi/repos?sort=pushed&direction=desc')
      .then((response) => response.json())
      .then((data: GitHubProject[]) => setProjects((prev) => prev.concat(data)))
    fetch('https://api.github.com/orgs/mangajap/repos?sort=pushed&direction=desc')
      .then((response) => response.json())
      .then((data: GitHubProject[]) => setProjects((prev) => prev.concat(data)))
  }, [])

  return (
    <section
      id="projects"
      className="py-3 bg-light m-0"
    >
      <Container className="py-5">
        <h2 className="display-4 pb-5 text-center">Projets</h2>
        <Row>
          {projects
            .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
            .map((project, index) => (
              <Project key={index} project={project} />
            ))}
        </Row>
      </Container>
    </section>
  )
}
