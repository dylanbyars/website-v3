import React from 'react'
import classnames from 'classnames'

export default ({ href, classes, children }) => (
  <a
    href={href}
    className={classnames([
      'text-indigo-dark',
      'hover:text-indigo-darkest',
      'trans',
      'trans-fast',
      ...classes,
    ])}
  >
    {children}
  </a>
)
