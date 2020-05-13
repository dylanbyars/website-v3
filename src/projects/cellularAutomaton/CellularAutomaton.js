// import React, { useState, useEffect } from 'react'
// import classnames from 'classnames'

// const Generation = ({ cellStates }) => (
//   <div className="flex">
//     {cellStates.map((cellState, idx) => (
//       <span
//         key={`${cellState}-${idx}`}
//         className={classnames(['h-12', 'w-12', 'm-1', 'rounded', ...cellState])}
//       />
//     ))}
//   </div>
// )

// const CellularAutomaton = () => {
//   const rules = [
//     // rule 126
//     {
//       '1,1,1': 'bg-grey-lighter',
//       '0,0,0': 'bg-grey-lighter',
//       '1,1,0': 'bg-teal-lighter',
//       '1,0,1': 'bg-teal-lighter',
//       '1,0,0': 'bg-teal-lighter',
//       '0,1,1': 'bg-teal-lighter',
//       '0,1,0': 'bg-teal-lighter',
//       '0,0,1': 'bg-teal-lighter',
//     },
//     // rule 60
//     {
//       '1,1,1': 'bg-grey-lighter',
//       '0,0,0': 'bg-grey-lighter',
//       '1,1,0': 'bg-grey-lighter',
//       '1,0,1': 'bg-teal-lighter',
//       '1,0,0': 'bg-teal-lighter',
//       '0,1,1': 'bg-teal-lighter',
//       '0,1,0': 'bg-teal-lighter',
//       '0,0,1': 'bg-teal-lighter',
//     },
//   ]

//   const [generations, setGenerations] = useState([])
//   const [rule, setRule] = useState(rules[Math.floor(Math.random() * 2)])

//   const init = () => {
//     // make rows with enough cells to fill the window's width
//     const cellCount = Math.floor(window.innerWidth / 58)

//     // build a page's-worth of rows
//     const rows = Math.floor(window.innerHeight / 58)

//     const randomCellState = () =>
//       !!Math.floor(Math.random() * 2) ? 'bg-teal-lighter' : 'bg-grey-lighter'

//     // generate a random row to start
//     const initialGeneration = Array(cellCount)
//       .fill()
//       .map(randomCellState)

//     // generate an initial page-worth of generations
//     const initialGenerations = Array(rows)
//       .fill()
//       .reduce((acc, _, idx) => [...acc, nextGeneration(acc[idx])], [
//         initialGeneration,
//       ])

//     setGenerations(initialGenerations)
//   }

//   useEffect(() => {
//     init()
//     setInterval(generationInterval, 1500)
//     window.addEventListener('resize', init)

//     return () => {
//       clearInterval(generationInterval)
//       window.removeEventListener('resize', init)
//     }
//   })

//   const nextGeneration = prevGeneration => {
//     // function for getting the state of a cell and its neighbors from a previous generation
//     const prevCellState = (prevGeneration, newCell) => {
//       const isActive = i => (i === 'bg-grey-lighter' ? 1 : 0)

//       const self = prevGeneration[newCell]
//       const leftSibling =
//         prevGeneration[newCell - 1] || prevGeneration[prevGeneration.length - 1]
//       const rightSibling = prevGeneration[newCell + 1] || prevGeneration[0]
//       return [leftSibling, self, rightSibling].map(item => isActive(item))
//     }

//     // function to determine a new row's cell's state based on a previous generation
//     const nextCellState = prevStates => {
//       const cases = Object.keys(rule)
//       const states = Object.values(rule)
//       switch (prevStates.toString()) {
//         case cases[0]:
//           return states[0]
//         case cases[1]:
//           return states[1]
//         case cases[2]:
//           return states[2]
//         case cases[3]:
//           return states[3]
//         case cases[4]:
//           return states[4]
//         case cases[5]:
//           return states[5]
//         case cases[6]:
//           return states[6]
//         case cases[7]:
//           return states[7]
//       }
//     }

//     return prevGeneration.map((cell, index) => {
//       return nextCellState(prevCellState(prevGeneration, index))
//     })
//   }

//   const generationInterval = () => {
//     const currentState = generations
//     const nextGeneration = nextGeneration(currentState[currentState.length - 1])
//     // check if the new generation is either all active or all inactive
//     // if it is, scrap the whole lineage and start over
//     if (!nextGeneration.includes('bg-teal-lighter')) {
//       init()
//     } else if (!nextGeneration.includes('bg-grey-lighter')) {
//       init()
//     } else {
//       setGenerations([generations.slice(1), nextGeneration])
//     }
//   }

//   return (
//     <div className="flex flex-col justify-center items-center">
//       {generations.map((cellStates, idx) => (
//         <Generation key={`${cellStates[0]}-${idx}`} cellStates={cellStates} />
//       ))}
//     </div>
//   )
// }

// export default CellularAutomaton
