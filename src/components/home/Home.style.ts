import styled from 'styled-components';
import { SectionWrapper } from '../common/Section.style'

export const HomeWrapper = styled(SectionWrapper)`
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HomeSummary = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-basis: 60%;
  }
  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const HomeWelcome = styled.p``

export const HomeName = styled.h1`
  margin: 6px 0 10px 0;
  font-size: 2.5rem;
  font-weight: 900;
`

export const HomeJobOccuped = styled.p`
  text-transform: uppercase;
`

export const HomeButtons = styled.div`
  margin: 30px 0px;
`;

export const HomeSocial = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 25px;
  }
`;

export const HomeIcon = styled.img`
  width: 24px;
`;

export const HomeImage = styled.div`
  width: 400px;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-basis: 40%;
  }
`
