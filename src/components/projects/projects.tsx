import styled from 'styled-components';
import axios from 'axios';
import { Component } from 'react'
import projects from '../../data/projects.data';
import { SectionWrapper, SectionHeader } from '../common/section.style'
import ProjectCard from './project-card';
import GitHubProject from './github-project';
import GitHubProjectCard from './github-project-card';


const ProjectsWrapper = styled(SectionWrapper)``;

const GitHubProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


interface ProjectsState {
  gitHubProjects: GitHubProject[];
}
export default class Projects extends Component<{}, ProjectsState> {
  state: ProjectsState = {
    gitHubProjects: [],
  }

  componentDidMount() {
    axios.get<GitHubProject[]>("https://api.github.com/users/stantanasi/repos?sort=pushed&direction=desc")
      .then(response => response.data)
      .then(response => this.setState({
        gitHubProjects: response,
      }));
  }

  render() {
    return (
      <ProjectsWrapper id="projects">
        <SectionHeader>Projets</SectionHeader>
        <GitHubProjectsWrapper>
          {this.state.gitHubProjects.map((project, index) => (
            <GitHubProjectCard
              key={index}
              project={project} />
          ))}
        </GitHubProjectsWrapper>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project} />
        ))}
      </ProjectsWrapper>
    )
  }
}
