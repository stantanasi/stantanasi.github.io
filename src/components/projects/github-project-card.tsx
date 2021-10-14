import React, { Component } from 'react'
import GitHubProject from './github-project'
import { GitHubProjectDescription, GitHubProjectTitle, GitHubProjectWrapper } from './github-project-card.style'
import { Button } from '../common/button';
import axios from 'axios';
import styled from 'styled-components';
import Icon from '../common/icon';

interface Props {
  project: GitHubProject;
}

export default class GitHubProjectCard extends Component<Props, {}> {
  state = {}

  render() {
    return (
      <GitHubProjectWrapper>
        {this.props.project.homepage ?
          <a href={this.props.project.homepage ?? ""}>
            <GitHubProjectTitle>{this.props.project.name}</GitHubProjectTitle>
          </a> :
          <GitHubProjectTitle>{this.props.project.name}</GitHubProjectTitle>
        }
        <GitHubProjectDescription>{this.props.project.description}</GitHubProjectDescription>
        <Button as="a" href={this.props.project.html_url}>GitHub</Button>
        <hr />
        {this.props.project.languages_url && <Langages languages_url={this.props.project.languages_url} />}
        <Footer project={this.props.project} />
      </GitHubProjectWrapper>
    )
  }
}



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



class Footer extends Component<{ project: GitHubProject }, {}> {
  render() {
    return (
      <div>
        <Star href={this.props.project.stargazers_url}>
          <Icon src="/images/icons/star.svg" alt="Star" />
          <StarCount> {this.props.project.stargazers_count}</StarCount>
        </Star>
        <UpdatedAt>Updated on {new Date(this.props.project.pushed_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</UpdatedAt>
      </div>
    )
  }
}

const Star = styled.a`
  color: #57606a;
  text-decoration: none;

  img {
    width: 19px;
  }
`;

const StarCount = styled.span`
  margin-right: 10%;
`;

const UpdatedAt = styled.span`
  font-size: smaller;
  color: #6c757d;
`;
