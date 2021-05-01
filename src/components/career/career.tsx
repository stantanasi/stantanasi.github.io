import React from 'react'
import career from '../../data/career.data';
import { SectionHeader } from '../common/section.style'
import JobCard from './job-card';
import { CareerWrapper } from './career.style';

const Career = (props: {}) => {
  return (
    <CareerWrapper id="career">
      <SectionHeader>Parcours professionnel</SectionHeader>
      {career.map((workExperience, index) => (
        <JobCard key={index} job={workExperience} />
      ))}
    </CareerWrapper>
  )
}

export default Career
