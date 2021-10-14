import styled from 'styled-components'

const Bar = styled.div`
  height: 1rem;
  background-color: #d6ecff;
  border-radius: .25rem;
  overflow: hidden;
`;

const Percentage = styled.span<{ number: number; }>`
  width: ${props => props.number + '%'};
  height: 100%;
  background-color: #80c4ff;
  display: block;
  /* transition: 3s ease;
  transition-delay: 0.5s; */
`;

interface Props {
  progress: number;
}

const ProgressBar = (props: Props) => {
  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   setValue(props.progress);
  // })

  return (
    <Bar>
      <Percentage number={props.progress} />
    </Bar>
  )
}

export default ProgressBar
