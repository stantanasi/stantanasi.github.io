import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function AboutMe() {
  return (
    <Container
      id="about-me"
      as="section"
      className="py-3"
      fluid
      style={{ backgroundColor: "#E9ECEF" }}
    >
      <Row className="p-5">
        <Col xs={5} className="d-none d-lg-block align-self-center">
          <img
            className="border border-secondary rounded-circle"
            src="./images/me.png"
            width="375"
            height="375"
            alt="Me"
          />
        </Col>
        <Col lg={7}>
          <h2 className="display-4 mb-5 text-center">À propos</h2>
          <p className="lead text-center">Je m'appelle Lory-Stan TANASI. Visitez mon GitHub si vous souhaitez regarder en détails certains de mes projets.</p>
        </Col>
      </Row>
    </Container>
  )
}
