import React from 'react'
import Navigation from './navigation'

const PageShell: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <Navigation />
      <section>{children}</section>
    </>
  )
}

export default PageShell
