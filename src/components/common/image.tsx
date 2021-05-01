import React from 'react';

interface Props {
  src: string;
  alt?: string;
}

const Image = (props: Props) => {
  return <img src={process.env.PUBLIC_URL + props.src} alt={props.alt} />;
}

export default Image

