import React from 'react'
import { SectionHeader } from '../common/section.style'
import * as Styled from './about-me.style'

interface Props {

}

const AboutMe = (props: Props) => {
  return (
    <Styled.AboutMeWrapper id="about-me">
      <SectionHeader>À propos</SectionHeader>
      <Styled.AboutMeInfo>
        <Styled.AboutMeAvatar src="/images/me.png" alt="Avatar" />

        <Styled.AboutMeSummary>
          <Styled.Story>
            <p>
              Diplômé de l'IUT de Cachan en Génie Électrique et Informatique Industrielle, suivie d'une année à l'ESTIAM en alternance chez 42c.
            </p>
            <p>
              Autodidacte et motivé, je réalise depuis 2018, ma propre <a href="https://play.google.com/store/apps/details?id=com.tanasi.mangajap">application Android disponible sur le Play Store</a>, ainsi que l'<a href="https://mangajap.000webhostapp.com/api/manga">API</a> et le <a href="https://mangajap.000webhostapp.com/">site web</a>.
            </p>
            <p>
              Visitez mon GitHub si vous souhaitez regarder en détails certains de mes projets.
            </p>
          </Styled.Story>
          <Styled.Quote>
            <p>"Déterminé à atteindre le top"</p>
            <p>— Stan</p>
          </Styled.Quote>

          <div>
            <h3>Centres d'intérêts</h3>
            <Styled.Interests>
              <div>Musique</div>
              <div>Voyage</div>
              <div>Films</div>
              <div>Sport</div>
            </Styled.Interests>
          </div>
        </Styled.AboutMeSummary>
      </Styled.AboutMeInfo>
    </Styled.AboutMeWrapper>
  )
}

export default AboutMe
