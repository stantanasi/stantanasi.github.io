import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  height: 5px;
  background-color: #d6ecff;
  border-radius: .25rem;
`;

const Percentage = styled.span<{ number: number; }>`
  width: ${props => props.number + '%'};
  height: 100%;
  background-color: #80c4ff;
  display: block;
`;

interface Props {
  progress: number;
}

const ProgressBar = (props: Props) => {
  return (
    <Bar>
      <Percentage number={props.progress} />
    </Bar>
  )
}

export default ProgressBar
