import React from 'react'

import Projects from './Projects'
import Nav from './Nav'
import Footer from './Footer'

export default () => (
  <main className="min-h-screen p-3 font-mono bg-black text-grey-lightest">
    <header className="md:flex md:flex-col md:items-end ">
      <h1 className="font-hairline text-3xl md:text-5xl">Dylan Byars</h1>
      <h3 className="font-hairline md:text-2xl">software engineer</h3>
    </header>

      <Projects />

    <Nav />

    <Footer />
  </main>
)
