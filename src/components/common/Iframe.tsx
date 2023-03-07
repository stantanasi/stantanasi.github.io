import React from 'react'
import styled from 'styled-components';

const IFrameCSS = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

interface Props {
  src: string;
}

const IFrame = (props: Props) => {
  return (
    <IFrameCSS
      title={props.src}
      src={props.src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope"
      allowFullScreen />
  )
}

export default IFrame
