import styled from 'styled-components';
import { SectionWrapper } from '../common/section.style';

export const AboutMeWrapper = styled(SectionWrapper)`
`;

export const AboutMeInfo = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutMeAvatar = styled.img`
  width: 230px;
`;

export const AboutMeSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Story = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Quote = styled.div`
  text-align: center;
  font-style: italic;
`

export const Interests = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;
