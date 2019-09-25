import React from 'react'
import Helmet from 'react-helmet'

export default ({ title, children }) => (
  <>
    <Helmet title={title} />
    {children}
  </>
)
