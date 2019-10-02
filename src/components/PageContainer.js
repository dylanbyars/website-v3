import React from 'react'
import Helmet from 'react-helmet'

export default ({ title, children }) => (
  <>
    <Helmet title={`Dylan Byars | ${title}`}>
      <link
        rel="icon"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/223/male-technologist_1f468-200d-1f4bb.png"
      />
    </Helmet>
    {children}
  </>
)
