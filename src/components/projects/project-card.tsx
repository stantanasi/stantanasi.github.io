import React from 'react';
import { Project } from '../../data/projects.data';
import { Button } from '../common/button';
import IFrame from '../common/iframe';
import Image from '../common/image';
import { ProjectDescription, ProjectDetails, ProjectLanguage, ProjectLanguages, ProjectLanguagesTools, ProjectLinks, ProjectPreview, ProjectTitle, ProjectTool, ProjectTools, ProjectWrapper } from './project-card.style';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const project = props.project;

  return (
    <ProjectWrapper>

      <ProjectDetails>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>
          {project.description.split('\n').map((text, index) => (
            (index === 0) ? text : [<br key={index} />, text]
          ))}
        </ProjectDescription>
        <ProjectLanguagesTools>
          <ProjectLanguages>
            {project.languages.map((language, index) => (
              <ProjectLanguage key={index} src={language.src} alt={language.name} />
            ))}
          </ProjectLanguages>
          <ProjectTools>
            {project.tools?.map((tool, index) => (
              <ProjectTool key={index} src={tool.src} alt={tool.name} />
            ))}
          </ProjectTools>
        </ProjectLanguagesTools>
        <ProjectLinks>
          {project.links.website && <Button as="a" href={project.links.website}>Site web</Button>}
          {project.links.file && <Button as="a" href={project.links.file}>Rapport</Button>}
          {project.links.github && <Button as="a" href={project.links.github}>GitHub</Button>}
        </ProjectLinks>
      </ProjectDetails>

      <ProjectPreview>
        {project.links.video ? <IFrame src={project.links.video} /> :
          project.links.image && <Image src={project.links.image} alt={project.title} />}
      </ProjectPreview>

    </ProjectWrapper>
  )
}

export default ProjectCard
