import React, { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import ThemeToggle from './ThemeToggle'
import Nav from './Nav'
import Resume from './Resume'
import Footer from './Footer'

const darkTheme = 'bg-black text-grey-lightest'
const lightTheme = 'bg-grey-lightest text-grey-darkest'

export default () => {
  const [theme, setTheme] = useState('dark')

  return (
    <main
      className={classnames([
        { [darkTheme]: theme === 'dark' },
        { [lightTheme]: theme === 'light' },
        'relative',
      ])}
    >
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <nav className="flex flex-col">
        <a href="https://github.com/dylanbyars/">github</a>

        <a href="https://www.linkedin.com/in/dylanbyars/">linked in</a>

        <a href="https://codepen.io/dylanbyars/">codepen</a>
      </nav>
      <section className="projects">
        <div>
          <p>I made a periodic table that's pretty dope</p>
          <Link to="/periodic-table">Periodic Table</Link>
        </div>
        <div>
          <p>It's alive!</p>
          <Link to="/cellular-automaton">Cellular Automaton</Link>
        </div>
      </section>
      <section className="resume markdown">
        <Resume />
      </section>
      <footer className="flex w-100 pb-5">
        <small className="mx-auto tracking-wide font-hairline">
          &copy; 2019 Dylan Byars
        </small>
      </footer>
    </main>
  )
}
