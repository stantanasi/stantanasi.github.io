import React, { Component } from 'react'
import GitHubProject from '../github-project'
import * as Styled from './github-project-card.style'
import axios from 'axios';
import styled from 'styled-components';

interface Props {
  project: GitHubProject;
}

const GitHubProjectCard = (props: Props) => {
  return (
    <Styled.GitHubProjectWrapper>
      {props.project.homepage ?
        <a href={props.project.homepage ?? ""}>
          <Styled.GitHubProjectTitle>{props.project.name}</Styled.GitHubProjectTitle>
        </a> :
        <Styled.GitHubProjectTitle>{props.project.name}</Styled.GitHubProjectTitle>
      }

      <Styled.GitHubProjectDescription>{props.project.description}</Styled.GitHubProjectDescription>

      <Styled.GitHubProjectLinks>
        <a href={props.project.html_url} target="__blank">
          <img src="/images/icons/github.svg" alt="" width="24" />
        </a>
      </Styled.GitHubProjectLinks>


      <hr />


      {props.project.languages_url &&
        <Langages languages_url={props.project.languages_url} />}

      <Footer>
        <ProjectStats>
          <a href={`${props.project.html_url}/stargazers`}>
            <img src="/images/icons/star.svg" alt="Star" />
            <span> {props.project.stargazers_count}</span>
          </a>
          <a href={`${props.project.html_url}/network/members`}>
            <img src="/images/icons/fork.svg" alt="Fork" />
            <span> {props.project.forks_count}</span>
          </a>
        </ProjectStats>
        <UpdatedAt>Updated on {new Date(props.project.pushed_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</UpdatedAt>
      </Footer>
    </Styled.GitHubProjectWrapper>
  )
}

export default GitHubProjectCard



interface LanguagesState {
  languages: {
    [langage: string]: number;
  }
}

class Langages extends Component<{ languages_url: string }, LanguagesState> {

  state: LanguagesState = {
    languages: {}
  };

  componentDidMount() {
    axios.get<LanguagesState['languages']>(this.props.languages_url)
      .then(response => response.data)
      .then(response => this.setState({
        languages: response,
      }));
  }

  render() {
    const total = Object.values(this.state.languages).reduce((a, b) => a + b, 0);

    return (
      <LanguagesComponent>
        Languages: {Object.entries(this.state.languages).map(([language, val], index) => (
          <Language
            key={index}>
            {language}: {(100 * val / total).toFixed(1)} %
          </Language>
        ))}
      </LanguagesComponent>
    )
  }
}

const LanguagesComponent = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`;

const Language = styled.span`
  background-color: #f8f9fa;
  margin-right: 10px;
  border-radius: .25rem;
  display: inline-block;
  padding: 3px 6px;
  margin-bottom: 6px;
  font-size: 13px;

  :hover {
    background-color: #dae0e5;
  }
`;


const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProjectStats = styled.div`
  display: flex;
  gap: 0.6rem;

  a {
    color: #57606a;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  img {
    width: 19px;
  }
`

const UpdatedAt = styled.span`
  font-size: smaller;
  color: #6c757d;
`;
