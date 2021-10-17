import React from 'react'
import { FooterWrapper } from './footer.style'

interface Props {

}

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <div>
        <h2>Lory-Stan TANASI</h2>
        <span>© {new Date().getFullYear()} Lory-Stan TANASI. All rights reserved</span>
      </div>
      <div>
        <a href="https://github.com/stantanasi" target="__blank">
          <img src="/images/icons/github.svg" alt="GitHub" width="24" />
        </a>
        <a href="https://www.linkedin.com/in/lory-stan-tanasi" target="__blank">
          <img src="/images/icons/linkedin.svg" alt="LinkedIn" width="24" />
        </a>
        <a href="https://www.instagram.com/stan.tns" target="__blank">
          <img src="/images/icons/instagram.svg" alt="Instagram" width="24" />
        </a>
      </div>
    </FooterWrapper>
  )
}

export default Footer
