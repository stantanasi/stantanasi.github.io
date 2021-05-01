import React from 'react'
import { SectionHeader } from '../common/section.style'
import { Skill, SkillsWrapper } from './skills.style'

interface Props {

}

const Skills = (props: Props) => {
  return (
    <SkillsWrapper id="skills">
      <SectionHeader>Compétences</SectionHeader>
      <div>
        <Skill>Android</Skill>
        <Skill>Kotlin</Skill>
        <Skill>PHP</Skill>
        <Skill>MySQL</Skill>
        <Skill>Angular</Skill>
        <Skill>Typescript</Skill>
        <Skill>Node.js</Skill>
        <Skill>JavaScript</Skill>
        <Skill>React</Skill>
        <Skill>Java</Skill>
        <Skill>HTML5</Skill>
        <Skill>CSS3</Skill>
        <Skill>C#</Skill>
        <Skill>C++</Skill>
        <Skill>C</Skill>
        <Skill>Flutter</Skill>
        <Skill>Python</Skill>
        <Skill>JSON:API</Skill>
        <Skill>Altium Designer</Skill>
        <Skill>e!COCKPIT - WAGO</Skill>
        <Skill>Unity Pro</Skill>
      </div>
    </SkillsWrapper>
  )
}

export default Skills
