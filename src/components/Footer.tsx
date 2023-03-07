import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-auto py-5 text-center"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <Container>
        <h2 className="display-4 pb-5 text-center">
          Me contacter
        </h2>
        <p className="lead text-center pb-3">
          <p>
            <a className="text-decoration-none" href="mailto:stantanasi@gmail.com">
              stantanasi@gmail.com
            </a>
          </p>
          <p className="d-flex gap-4 justify-content-center">
            <a
              className="text-dark"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/stantanasi"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              className="text-dark"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/lory-stan-tanasi"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              className="text-dark"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/stan.tns"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </p>
        </p>

        <div className="pt-4">
          <em>© {new Date().getFullYear()} Lory-Stan TANASI. Tous droits réservés</em>
        </div>
      </Container>
    </footer>
  )
}
