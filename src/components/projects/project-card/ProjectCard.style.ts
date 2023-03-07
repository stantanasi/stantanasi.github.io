import styled from 'styled-components';

export const ProjectWrapper = styled.article`
  align-items: center;  
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5em;
  justify-content: space-between;
`;

export const ProjectLanguagesTools = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLanguage = styled.img`
  height: 32px;
`;

export const ProjectTool = styled.img`
  height: 32px;
`;

export const ProjectPreview = styled.div`
  height: 300px;
  background-color: rgb(220, 220, 220);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-row: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
