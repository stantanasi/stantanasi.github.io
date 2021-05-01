import React from 'react'
import { SectionHeader } from '../common/section.style'
import { ContactWrapper } from './contact.style'

interface Props {
  
}

const Contact = (props: Props) => {
  return (
    <ContactWrapper id="contact">
      <SectionHeader>Me contacter</SectionHeader>
      <div>
        Email : stantanasi@gmail.com
      </div>
    </ContactWrapper>
  )
}

export default Contact
