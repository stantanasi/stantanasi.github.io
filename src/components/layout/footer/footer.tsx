import React from 'react'
import { FooterWrapper } from './footer.style'

interface Props {

}

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <strong>Made with React</strong>
      <br />
      <strong>© {new Date().getFullYear()} Lory-Stan TANASI</strong>
    </FooterWrapper>
  )
}

export default Footer
