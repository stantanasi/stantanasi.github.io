import styled from 'styled-components';
import { SectionWrapper } from '../common/section.style';

export const AboutMeWrapper = styled(SectionWrapper)`
`;

export const AboutMeInfo = styled.article`
  display: flex;
  align-items: center;

  > div:first-child {
    margin-right: 10%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div:first-child {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
`;

export const AboutMeSummary = styled.p``;
