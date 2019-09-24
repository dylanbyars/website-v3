import React, { useState, useRef } from 'react'
import ElementDetail from './ElementDetail'

const groupBlockStyles = {
  nonmetal: 'yellow-lightest',
  'noble gas': 'blue-lighter',
  'alkali metal': 'grey-light',
  'alkaline earth metal': 'red-lighter',
  metalloid: 'orange-lighter',
  halogen: 'blue-lightest',
  metal: 'pink-lighter',
  'transition metal': 'teal-lightest',
  lanthanoid: 'indigo-lightest',
  actinoid: 'green-lightest',
  'probably metal': 'grey-lightest',
  'probably noble gas': 'grey-lighter',
}

const ElementBlock = ({ element, setActiveElement }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [offsetX, setOffsetX] = useState({})
  const [offsetY, setOffsetY] = useState({})

  const elementRef = useRef(null)

  const handleMouseOver = () => {
    setIsHovered(true)

    const elementPosition = elementRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const offsetX =
      elementPosition.x > viewportWidth / 2
        ? { left: '-8rem' }
        : { right: '-8rem' }

    const offsetY =
      elementPosition.y > viewportHeight / 2
        ? { top: '-8rem' }
        : { bottom: '-8rem' }

    setOffsetX(offsetX)
    setOffsetY(offsetY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setOffsetX({})
    setOffsetY({})
  }

  return (
    <div
      className="relative"
      ref={elementRef}
      onClick={() => setActiveElement(element)}
    >
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseLeave}
        className={`bg-${
          groupBlockStyles[element.groupBlock]
        } relative flex justify-center items-end border border-grey-dark rounded-sm w-12 h-12 m-1 cursor-pointer`}
      >
        <small className="absolute top-0 right-0 pt-1 pr-1">
          {element.atomicNumber}
        </small>
        <div className="mb-1 text-xl">{element.symbol}</div>
      </div>
      {isHovered && (
        <div className="absolute" style={{ ...offsetY, ...offsetX }}>
          <ElementDetail element={element} />
        </div>
      )}
    </div>
  )
}

export default ElementBlock
