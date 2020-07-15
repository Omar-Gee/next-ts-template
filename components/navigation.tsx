import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Navigation: React.FunctionComponent = () => {
  return (
    <nav>
      <Link href="/">
        <Anchor>Home</Anchor>
      </Link>
      <Link href="/about">
        <Anchor>About</Anchor>
      </Link>
      <Link href="/repos">
        <Anchor>Repos</Anchor>
      </Link>
    </nav>
  )
}

export default Navigation

const Anchor = styled.a`
  color: red;
`
