import React from 'react'
import skills from '../../data/skills.data'
import { SectionHeader } from '../common/section.style'
import { SkillsCardWrapper, SkillsWrapper } from './skills.style'
import SkillsCard from './skills-card'

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
