import React, { FunctionComponent } from 'react'
import { CustomTextAreaProps } from './interfaces'
import styled from 'styled-components'
import { Label } from './customInput'

const CustomTextArea: FunctionComponent<CustomTextAreaProps> = ({
  placeholder,
  label,
}): JSX.Element => {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <TextArea id={label} placeholder={placeholder} />
    </Container>
  )
}

export default CustomTextArea

const Container = styled.div`
  margin: 0 0 8px 0;
`

const TextArea = styled.textarea`
  color: #6a5b5b;
  width: 230px;
  height: 86px;
  border: 1px solid rgba(255, 250, 250, 0.5);
  background: black;
  padding: 16px 8px 0 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`
