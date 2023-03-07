import React from 'react';
import styled from 'styled-components'

const ImageIcon = styled.img`
  width: 24px;
`;

interface Props {
  src: string;
  alt?: string;
}

const Icon = (props: Props) => {
  return <ImageIcon src={process.env.PUBLIC_URL + props.src} alt={props.alt} />;
}

export default Icon

