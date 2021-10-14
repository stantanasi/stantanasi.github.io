import styled from 'styled-components';
import { SectionWrapper } from '../common/section.style'

export const HomeWrapper = styled(SectionWrapper)`
  margin-top: 90px;
  scroll-margin-top: 100px;
`;

export const HomeIntro = styled.div`
  display: flex;
  min-height: calc(100vh - 100px);
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HomeSummary = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
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
