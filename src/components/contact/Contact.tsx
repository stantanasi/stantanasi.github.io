import React from 'react'
import { SectionHeader } from '../common/Section.style'
import { ContactWrapper } from './Contact.style'

interface Props {

}

const Contact = (props: Props) => {
  return (
    <ContactWrapper id="contact">
      <SectionHeader>Me contacter</SectionHeader>
      <div>
        Email : <a href="mailto:stantanasi@gmail.com">stantanasi@gmail.com</a>
      </div>
    </ContactWrapper>
  )
}

export default Contact
