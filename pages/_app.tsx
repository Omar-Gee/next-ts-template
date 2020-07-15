import React from 'react'
import PageShell from '../components/PageShell'

const _App = ({ Component, pageProps }) => {
  return (
    <PageShell>
      <Component {...pageProps} />
    </PageShell>
  )
}

export default _App
