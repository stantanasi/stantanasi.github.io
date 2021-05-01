import React from 'react'
import { Education } from '../../data/education.data'
import { EducationWrapper } from './education-card.style';

interface Props {
  education: Education;
}

const EducationCard = (props: Props) => {
  const education = props.education;

  return (
    <EducationWrapper>
      <p>{`${education.startDate?.toLocaleDateString()} à ${education.endDate ? education.endDate.toLocaleDateString() : "maintenant"}`}</p>
      <h3>{education.name}</h3>
      <p>{education.school} - {education.location}</p>
      <p>{education.description.split('\n').map((text, index) => (
        (index === 0) ? text : [<br key={index} />, text]
      ))}</p>
    </EducationWrapper>
  )
}

export default EducationCard
