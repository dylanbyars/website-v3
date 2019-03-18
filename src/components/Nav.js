import React from 'react'
import { Link } from 'gatsby'

const linkStyles = 'link text-4xl mt-1 md:text-3xl'

export default () => (
  <nav className="flex flex-col items-end justify-end">
    <Link className={linkStyles} to="/resume">
      resume
    </Link>
    <a className={linkStyles} href="https://codepen.io/dylanbyars/">
      codepen
    </a>
    <a className={linkStyles} href="https://github.com/dylanbyars/">
      github
    </a>
    <a className={linkStyles} href="https://www.linkedin.com/in/dylanbyars/">
      linkedin
    </a>
  </nav>
)
