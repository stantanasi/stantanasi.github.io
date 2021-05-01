import styled from 'styled-components';

export const ProjectWrapper = styled.article`
  align-items: center;  
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  grid-template-rows: 1fr;
  margin: 80px 0;
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  padding-right: 100px;
  background-color: rgb(248, 248, 248);
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  border-radius: 10px;
  min-height: 400px;
  grid-area: 1 / 1 / auto / 3;

  @media (max-width: 800px) {
    min-height: unset;
    grid-column: 1 / 4;
    grid-row: unset;
    padding: 30px;
  }
`;

export const ProjectTitle = styled.h3`
  margin-bottom: 25px;
`;

export const ProjectDescription = styled.div`
  margin-bottom: auto;
`;

export const ProjectLanguagesTools = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 0 2%;
`;

export const ProjectLanguages = styled.div`
  margin-right: auto;

  > :not(:last-child) {
    margin-right: 25px;
  }
`;

export const ProjectLanguage = styled.img`
  height: 22px;
`;

export const ProjectTools = styled.div`

  > :not(:last-child) {
    margin-right: 25px;
  }
`;

export const ProjectTool = styled.img`
  height: 22px;
`;

export const ProjectLinks = styled.div`
  margin-top: 20px;

  > :not(:last-child) {
    margin-right: 25px;
  }
`;

export const ProjectPreview = styled.div`
  height: 300px;
  grid-area: 1 / 2 / auto / 4;
  background-color: rgb(220, 220, 220);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  overflow: hidden;

  @media (max-width: 800px) {
    grid-column: 1 / 4;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
