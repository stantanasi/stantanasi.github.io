import React from 'react'
import { Job } from '../../data/career.data'
import { JobWrapper } from './job-card.style';

interface Props {
  job: Job;
}

const JobCard = (props: Props) => {
  const job = props.job;

  return (
    <JobWrapper>
      <p>{`${job.startDate?.toLocaleDateString()} à ${job.endDate ? job.endDate.toLocaleDateString() : "maintenant"}`}</p>
      <h3>{job.name}</h3>
      <p>{job.company} - {job.location}</p>
      <p>{job.description.split('\n').map((text, index) => (
        (index === 0) ? text : [<br key={index} />, text]
      ))}</p>
    </JobWrapper>
  )
}

export default JobCard
