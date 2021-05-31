import React from 'react'
import { SectionHeader } from '../common/section.style'
import AboutMeAvatar from './about-me-avatar'
import { AboutMeInfo, AboutMeSummary, AboutMeWrapper } from './about-me.style'

interface Props {

}

const AboutMe = (props: Props) => {
  return (
    <AboutMeWrapper id="about-me">
      <SectionHeader>À propos</SectionHeader>
      <AboutMeInfo>
        <AboutMeAvatar src="/images/lory-stan-tanasi.jpg" />

        <AboutMeSummary>
          Bonjour, je suis Lory-Stan TANASI, développeur Android et web.
          <br />
          Diplômé de l'IUT de Cachan en Génie Électrique et Informatique Industrielle, suivie d'une année à l'ESTIAM en alternance chez 42c.
          <br />
          <br />
          Autodidacte et motivé, je réalise depuis 2018, ma propre <a href="https://play.google.com/store/apps/details?id=com.tanasi.mangajap">application Android disponible sur le Play Store</a>. Durant la création, j'ai également réalisé le <a href="https://mangajap.000webhostapp.com/">site web</a> ainsi que l'<a href="https://mangajap.000webhostapp.com/api/manga">API</a>.
          <br />
          <br />
          Visitez mon GitHub si vous souhaitez regarder en détails certains de mes projets.
        </AboutMeSummary>
      </AboutMeInfo>
    </AboutMeWrapper>
  )
}

export default AboutMe
