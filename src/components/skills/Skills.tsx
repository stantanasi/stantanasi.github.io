import React from 'react'
import skills from '../../data/skills.data'
import { SectionHeader } from '../common/Section.style'
import { SkillsCardWrapper, SkillsWrapper } from './Skills.style'
import SkillsCard from './SkillsCard'

const Skills = (props: {}) => {
  return (
    <SkillsWrapper id="skills">
      <SectionHeader>Compétences</SectionHeader>
      <SkillsCardWrapper>
        {skills.map((skillCategory, index) => (
          <SkillsCard
            key={index}
            skillCategory={skillCategory} />
        ))}
      </SkillsCardWrapper>
    </SkillsWrapper>
  )
}

export default Skills
