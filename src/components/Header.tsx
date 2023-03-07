import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar
      className="px-3"
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#EAECEFCC" }}
    >
      <Navbar.Brand href="/">
        {`<Stan />`}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="/#about-me">
            À propos
          </Nav.Link>
          <Nav.Link href="/#projects">
            Projets
          </Nav.Link>
          <Nav.Link href="/#skills">
            Compétences
          </Nav.Link>
          <Nav.Link href="/#contact">
            Me contacter
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
