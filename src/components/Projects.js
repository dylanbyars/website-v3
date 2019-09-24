import React from 'react'
import { Link } from 'gatsby'

const PeriodicTableImg = () => (
  <div className="periodic-table-grid-container h-32 w-64 mx-16">
    <span className="alkali bg-grey text-grey">.</span>
    <span className="alkaline-earth bg-red-light text-red-light">.</span>
    <span className="metals bg-pink-light text-pink-light">.</span>
    <span className="metalloids-ish bg-orange-light text-orange-light">.</span>
    <span className="nobles bg-blue-light text-blue-light">.</span>
    <span className="weirdos bg-green-light text-green-light">.</span>
  </div>
)

// const CellularAutomatonImg = () => (
//   <div>
//     <span className="bg-white">.</span>
//     <span className="bg-blue text-blue">.</span>
//   </div>
// )

export default () => (
  <section className="projects flex flex-col justify-around items-center">
    <article className="mx-auto my-8 flex flex-col items-center">
      <PeriodicTableImg />
      <p className="my-6">A wikipedia data powered periodic table.</p>
      <Link className="link" to="/periodic-table">
        Periodic Table
      </Link>
    </article>

    {/* <article className="mx-auto my-8 flex flex-col items-center">
      <CellularAutomatonImg />
      <p className="my-6">It's alive!</p>
      <Link className="link" to="/cellular-automaton">
        Cellular Automaton
      </Link>
    </article> */}
  </section>
)
