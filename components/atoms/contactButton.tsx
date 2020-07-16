import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const ContactButton: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Button type={'submit'}>Send</Button>
    </div>
  )
}

export default ContactButton

const Button = styled.button`
  width: 138px;
  height: 39px;
  border: 1px solid #fffafa;
  border-radius: 4px;
  background: black;
  color: white;
`
