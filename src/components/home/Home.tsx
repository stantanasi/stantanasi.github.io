import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

export default function Home() {
  return (
    <Container
      id="home"
      as="section"
      className="min-vh-100 d-flex align-content-center align-items-center"
      fluid
    >
      <Container className="text-center">
        <h1 className="display-1">
          Lory-Stan TANASI
        </h1>
        <h2 className="lead typist">
          Développeur mobile Android et web
        </h2>
        <div className="p-5 d-flex gap-4 justify-content-center">
          <a
            className="text-dark"
            href="https://github.com/stantanasi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a
            className="text-dark"
            href="https://www.linkedin.com/in/lory-stan-tanasi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            className="text-dark"
            href="https://www.instagram.com/stan.tns"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </div>
        <Button
          href="https://docs.google.com/document/d/1lE_4oHBLQV5tKlT6t3OKqG20fIo8HiGoXfMDn7dER8M"
          variant="outline-dark"
          size="lg"
          rel="noopener noreferrer"
          target="_blank"
        >
          Télécharger mon CV
        </Button>
      </Container>
    </Container>
  )
}
