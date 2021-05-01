import React from 'react'
import styled from 'styled-components'
import Image from '../common/image'

const AvatarWrapper = styled.div`
  width: 230px;
  height: 230px;

  img { 
    width: 230px;
    height: 230px;
    object-fit: cover;
  }
`;

interface Props {
  src: string;
}

const AboutMeAvatar = (props: Props) => {
  return (
    <AvatarWrapper>
      <Image src={props.src} alt="Avatar" />
    </AvatarWrapper>
  )
}

export default AboutMeAvatar
