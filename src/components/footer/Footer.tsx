import React from 'react'
import * as Styled from './Footer.style'

const Footer = (props: {}) => {
  return (
    <Styled.FooterWrapper>
      <Styled.FooterDetails>
        <h2>Lory-Stan TANASI</h2>
        <span>© {new Date().getFullYear()} Lory-Stan TANASI. All rights reserved</span>
      </Styled.FooterDetails>

      <Styled.FooterSocial>
        <a href="https://github.com/stantanasi" target="__blank">
          <img src="/images/icons/github.svg" alt="GitHub" width="24" />
        </a>
        <a href="https://www.linkedin.com/in/lory-stan-tanasi" target="__blank">
          <img src="/images/icons/linkedin.svg" alt="LinkedIn" width="24" />
        </a>
        <a href="https://www.instagram.com/stan.tns" target="__blank">
          <img src="/images/icons/instagram.svg" alt="Instagram" width="24" />
        </a>
      </Styled.FooterSocial>
    </Styled.FooterWrapper>
  )
}

export default Footer
