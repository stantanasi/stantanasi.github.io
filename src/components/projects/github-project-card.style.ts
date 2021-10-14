import styled from 'styled-components';

export const GitHubProjectWrapper = styled.article`
  width: 100%;
  margin: 1.5rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px;
  padding: 1rem;
  height: fit-content;

  hr {
    margin: 1rem 0;
  }

  @media (min-width: 800px) {
    flex: 0 0 calc(50% - 3rem);
    max-width: 50%;
  }
`;

export const GitHubProjectTitle = styled.h3`
  margin-bottom: .75rem;
`;

export const GitHubProjectDescription = styled.p`
  margin-bottom: 1rem;
`;