import React from 'react'
// import { Link } from 'gatsby'
import { HeaderLogo, HeaderNavbar, HeaderNavItem, HeaderNavMenu, HeaderWrapper } from './header.style'

const Header = (props: {}) => {
  return (
    <HeaderWrapper>
      <HeaderNavbar>

        <HeaderLogo>
          <a href="/">
            &lt;Lory-Stan TANASI /&gt;
          </a>
        </HeaderLogo>

        <HeaderNavMenu>
          <HeaderNavItem>
            <a href="/#home">Accueil</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/#about-me">À propos</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/#skills">Compétences</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/#projects">Projets</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/#career">Carrière</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/#education">Formation</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/#contact">Contact</a>
          </HeaderNavItem>
        </HeaderNavMenu>

      </HeaderNavbar>
    </HeaderWrapper>
  )
}

export default Header

