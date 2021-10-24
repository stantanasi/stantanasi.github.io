import styled from 'styled-components';
import { SectionWrapper } from '../common/section.style'

export const ProjectWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  gap: 90px;

  h2 {  
   margin: 0;
  }
`;

export const GitHubProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
