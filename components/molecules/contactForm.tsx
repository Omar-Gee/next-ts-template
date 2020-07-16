import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import CustomInput from '../atoms/customInput'
import CustomTextArea from '../atoms/customTextArea'
import ContactButton from '../atoms/contactButton'
import { ContactFormProps } from './interfaces/contactForm'

const ContactForm: FunctionComponent<ContactFormProps> = ({
  show,
}): JSX.Element => {
  return (
    <Container show={show}>
      <Title>Contact</Title>
      <Form>
        <CustomInput label="name" placeholder="Name" />
        <CustomInput label="email" placeholder="example@email.com" />
        <CustomTextArea label="message" placeholder="Message..." />
        <ContactButton />
      </Form>
    </Container>
  )
}

export default ContactForm

const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'initial' : 'none')};
  position: absolute;
  right: 48px;
  bottom: 100px;
  z-index: 1;
`

const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #fff7f7;
`

const Form = styled.form`
  width: fit-content;
  border: 1px solid white;
  border-radius: 4px;
  background: black;
  padding: 32px 48px;
`
