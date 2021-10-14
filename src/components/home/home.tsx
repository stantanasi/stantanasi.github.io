import React from 'react'
import { Button } from '../common/button'
import { HomeButtons, HomeWrapper, HomeJobOccuped, HomeName, HomeWelcome, HomeIntro, HomeSummary, HomeSocial, HomeIcon } from './home.style'

// TODO: le pdf redirige vers un document google drive (https://hashirshoaeb.com/home/#home)
const home = (props: {}) => {
  return (
    <HomeWrapper id="home">
      <HomeIntro>
        <HomeSummary>
          <HomeWelcome>Bonjour, je suis</HomeWelcome>
          <HomeName>Lory-Stan TANASI</HomeName>
          <HomeJobOccuped>Développeur mobile Android et web</HomeJobOccuped>

          <HomeButtons>
            <Button as="a" href="https://docs.google.com/document/d/1lE_4oHBLQV5tKlT6t3OKqG20fIo8HiGoXfMDn7dER8M">Télécharger mon CV</Button>
          </HomeButtons>

          <HomeSocial>
            <a href="https://github.com/stantanasi" target="__blank">
              <HomeIcon src="/images/social/github.svg" alt="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/lory-stan-tanasi" target="__blank">
              <HomeIcon src="/images/social/linkedin.svg" alt="LinkedIn"/>
            </a>
          </HomeSocial>
        </HomeSummary>
      </HomeIntro>
    </HomeWrapper>
  )
}

export default home
