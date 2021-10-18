import React, { useState } from 'react'
import * as Styled from './header.style'

const Header = (props: {}) => {
  const [navbarIsCollapsed, setNavbarIsCollapsed] = useState(true);

  return (
    <Styled.HeaderWrapper>
      <a href="/">
        &lt;Lory-Stan TANASI /&gt;
      </a>

      <Styled.HeaderNavbarToggler onClick={() => setNavbarIsCollapsed(!navbarIsCollapsed)}>
        More
      </Styled.HeaderNavbarToggler>

      <Styled.HeaderNavbar isCollapsed={navbarIsCollapsed}>
        <Styled.NavItem>
          <Styled.NavLink href="/#home">Accueil</Styled.NavLink>
        </Styled.NavItem>
        <Styled.NavItem>
          <Styled.NavLink href="/#about-me">À propos</Styled.NavLink>
        </Styled.NavItem>
        <Styled.NavItem>
          <Styled.NavLink href="/#skills">Compétences</Styled.NavLink>
        </Styled.NavItem>
        <Styled.NavItem>
          <Styled.NavLink href="/#projects">Projets</Styled.NavLink>
        </Styled.NavItem>
        <Styled.NavItem>
          <Styled.NavLink href="/#contact">Contact</Styled.NavLink>
        </Styled.NavItem>

      </Styled.HeaderNavbar>
    </Styled.HeaderWrapper>
  )
}

export default Header

