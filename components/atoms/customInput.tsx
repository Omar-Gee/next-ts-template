import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { CustomInputProps } from './interfaces'

const CustomInput: FunctionComponent<CustomInputProps> = ({
  placeholder,
  label,
}): JSX.Element => {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <Input placeholder={placeholder} id={label} />
    </Container>
  )
}

export default CustomInput

const Container = styled.div`
  margin: 0 0 8px 0;
`

const Input = styled.input`
  color: #6a5b5b;
  width: 230px;
  height: 41px;
  padding: 0 8px 0 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  border: 1px solid rgba(255, 250, 250, 0.5);
  background: black;
`
export const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: white;
  flex-direction: column;
`
