import React from 'react'
import Helmet from 'react-helmet'

export default ({ title, children }) => (
  <div>
    <Helmet title={`Dylan Byars | ${title}`}>
      <link
        rel="icon"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/223/man-dancing_1f57a.png"
      />
    </Helmet>
    {children}
  </div>
)
