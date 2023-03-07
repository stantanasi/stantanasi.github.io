import axios from 'axios';
import { Component } from 'react'
import projects, { Project } from '../../data/projects.data';
import { SectionHeader } from '../common/Section.style'
import GitHubProject from './github-project.type';
import GitHubProjectCard from './github-project-card/GithubProjectCard';
import * as Styled from './Projects.style';

interface ProjectsState {
  gitHubProjects: GitHubProject[];
  mangajapProjects: GitHubProject[];
  projects: Project[];
}

export default class Projects extends Component<{}, ProjectsState> {
  state: ProjectsState = {
    gitHubProjects: [],
    mangajapProjects: [],
    projects: projects,
  }

  componentDidMount() {
    axios.get<GitHubProject[]>("https://api.github.com/users/stantanasi/repos?sort=pushed&direction=desc")
      .then(response => response.data)
      .then(response => this.setState({
        gitHubProjects: response,
      }));
    axios.get<GitHubProject[]>("https://api.github.com/orgs/mangajap/repos?sort=pushed&direction=desc")
      .then(response => response.data)
      .then(response => this.setState({
        mangajapProjects: response,
      }));
  }

  render() {
    return (
      <Styled.ProjectWrapper id="projects">
        <SectionHeader>Projets</SectionHeader>
        <Styled.GitHubProjectsWrapper>
          {this.state.gitHubProjects.map((project, index) => (
            <GitHubProjectCard
              key={index}
              project={project} />
          ))}
        </Styled.GitHubProjectsWrapper>
        <Styled.GitHubProjectsWrapper>
          {this.state.mangajapProjects.map((project, index) => (
            <GitHubProjectCard
              key={index}
              project={project} />
          ))}
        </Styled.GitHubProjectsWrapper>
      </Styled.ProjectWrapper>
    )
  }
}
