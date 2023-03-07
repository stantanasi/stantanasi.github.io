import styled from 'styled-components';

export const GitHubProjectWrapper = styled.article`
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .75rem;

  @media (min-width: 800px) {
    flex: 0 0 calc(50% - 1rem);
    max-width: 50%;
  }
`;

export const GitHubProjectTitle = styled.h3`
`;

export const GitHubProjectDescription = styled.p`
  flex-basis: 100%;
`;

export const GitHubProjectLinks = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;

  img {
    width: 32px;
  }
`