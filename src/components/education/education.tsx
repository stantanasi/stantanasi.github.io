import React from 'react'
import educations from '../../data/education.data';
import { SectionHeader } from '../common/section.style'
import EducationCard from './education-card';
import { EducationWrapper } from './education.style';

const Education = (props: {}) => {
  return (
    <EducationWrapper id="education">
      <SectionHeader>Parcours éducatif</SectionHeader>
      {educations.map((education, index) => (
        <EducationCard key={index} education={education} />
      ))}
    </EducationWrapper>
  )
}

export default Education
