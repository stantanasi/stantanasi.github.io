import React from 'react'
import projects from '../../data/projects.data';
import { SectionHeader } from '../common/section.style'
import ProjectCard from './project-card';
import { ProjectsWrapper } from './projects.style';

const Projects = (props: {}) => {
  return (
    <ProjectsWrapper id="projects">
      <SectionHeader>Projets</SectionHeader>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project} />
      ))}
    </ProjectsWrapper>
  )
}

export default Projects
