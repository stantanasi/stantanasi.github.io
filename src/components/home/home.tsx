import React from 'react'
import { Button } from '../common/button'
import * as Styled from './home.style'

const Home = (props: {}) => {
  return (
    <Styled.HomeWrapper id="home">
      <Styled.HomeSummary>
        <Styled.HomeWelcome>Bonjour, je suis</Styled.HomeWelcome>
        <Styled.HomeName>Lory-Stan TANASI</Styled.HomeName>
        <Styled.HomeJobOccuped>Développeur mobile Android et web</Styled.HomeJobOccuped>

        <Styled.HomeButtons>
          <Button as="a" href="https://docs.google.com/document/d/1lE_4oHBLQV5tKlT6t3OKqG20fIo8HiGoXfMDn7dER8M">Télécharger mon CV</Button>
        </Styled.HomeButtons>

        <Styled.HomeSocial>
          <a href="https://github.com/stantanasi" target="__blank">
            <Styled.HomeIcon src="/images/social/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/lory-stan-tanasi" target="__blank">
            <Styled.HomeIcon src="/images/social/linkedin.svg" alt="LinkedIn" />
          </a>
        </Styled.HomeSocial>
      </Styled.HomeSummary>

      <Styled.HomeImage>
        <img src="/images/developer.png" alt="" />
      </Styled.HomeImage>
    </Styled.HomeWrapper>
  )
}

export default Home
