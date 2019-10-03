import React, { useEffect } from 'react'
import classnames from 'classnames'
import Projects from './Projects'
import Nav from './Nav'
import Footer from './Footer'

const secretMessage = `
  Hi, friend. Thanks for checking out the console.

  This site is built with Gatsby. I get the development experience I've grown to really appreciate from React with all the benefits of a static website.

  Most of the styling is done with a utility css library called tailwindcss. I first started using utility classes to style web apps with the handfull that come bundled with Bootstrap. When you pair utility classes with components, there're few reasons to jump out to a stylesheet to write your own classes, IMO. CSS definitely still has a place (animations are a bit tedious to write using  react-transition-group and universal styles for a project are probably better defined somewhere central) but I love keeping my markup and styling in the same place.

  Please do checkout my Periodic Table application. I've done a few iterations on this idea. My initial motivation to write a periodic table came from a need to learn about flexbox. That proved to be an excellent learning experience. 
  
  A bit about me: I enjoy reading, backpacking, playing fetch with my dog, and cooking. I'm a sucker for hard science fiction but I do make sure to interperse some non-fiction and classics into the mix. I sincerely love writing code. My journey to software was long and weird, but I eventually ended up in a place I'm happy in.

  If you'd like to learn more about my history or interests, my email is dylan@dylanbyars.com.


  "Thou art god, I am god. All that groks is god."
`

const Home = () => {
  useEffect(() => {
    console.log(secretMessage)
  }, [])

  return (
    <main
      className={classnames([
        'home min-h-screen p-3 font-mono',
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
}

export default Home
