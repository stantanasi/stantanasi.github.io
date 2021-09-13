import React, { Component } from 'react'
import Icon from '../common/icon'
import { SkillCategory } from '../../data/skills.data'
import SkillCard from './skill-card'
import { SkillCategoryName, SkillCategoryTitle, SkillCategoryWrapper, SkillsList } from './skills.style'

interface Props {
  skillCategory: SkillCategory;
  showSkills?: boolean;
}
interface State {

}

export default class SkillsCard extends Component<Props, State> {
  state = {
    showSkills: false
  };

  render() {
    return (
      <SkillCategoryWrapper>
        <SkillCategoryTitle onClick={() => this.setState({ showSkills: !this.state.showSkills })}>
          <SkillCategoryName>{this.props.skillCategory.title}</SkillCategoryName>
          {this.state.showSkills ?
            <Icon src="/images/icons/angle-up.svg" alt="Arrow up" /> :
            <Icon src="/images/icons/angle-down.svg" alt="Arrow down" />}
        </SkillCategoryTitle>
        <SkillsList show={this.state.showSkills}>
          {this.props.skillCategory.skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill} />
          ))}
        </SkillsList>
      </SkillCategoryWrapper>
    )
  }
}

