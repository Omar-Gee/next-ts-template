import React from 'react'
import PageShell from '../components/PageShell'

import '../styles/global.css'

const _App = ({ Component, pageProps }) => {
  return (
    <PageShell>
      <Component {...pageProps} />
    </PageShell>
  )
}

export default _App
