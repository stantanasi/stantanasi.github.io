import React from 'react'
import { Skill } from '../../data/skills.data'
import { SkillCardWrapper, SkillName, SkillPercentage, SkillTitle } from './Skills.style'
import ProgressBar from '../common/ProgressBar'

interface Props {
  skill: Skill;
}

const SkillCard = (props: Props) => {
  return (
    <SkillCardWrapper>
      <SkillTitle>
        <SkillName>{props.skill.name}</SkillName>
        <SkillPercentage>{props.skill.percent}%</SkillPercentage>
      </SkillTitle>
      <ProgressBar progress={props.skill.percent} />
    </SkillCardWrapper>
  )
}

export default SkillCard
