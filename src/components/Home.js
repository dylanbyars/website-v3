import React from 'react'
import classnames from 'classnames'

// import SliderToggle from './SliderToggle'
import Projects from './Projects'
import Nav from './Nav'
import Footer from './Footer'

const Home = (theme = 'dark') => (
  <main
    className={classnames([
      'min-h-screen p-3 font-mono',
      { 'bg-black text-grey-lightest': true },
    ])}
  >
    <header className="relative md:flex md:flex-col md:items-end ">
      <h1 className="font-hairline text-3xl md:text-5xl">Dylan Byars</h1>
      <h3 className="font-hairline md:text-2xl md:mb-4">software engineer</h3>
    </header>

    <Projects />

    <Nav />

    <Footer />
  </main>
)

export default Home
