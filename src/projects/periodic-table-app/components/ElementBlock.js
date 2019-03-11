import React, { Component } from 'react'
import ElementDetail from './ElementDetail'

const groupBlockStyles = {
  nonmetal: 'yellow-lightest',
  ['noble gas']: 'blue-lighter',
  ['alkali metal']: 'grey-light',
  ['alkaline earth metal']: 'red-lighter',
  metalloid: 'orange-lighter',
  halogen: 'blue-lightest',
  metal: 'pink-lighter',
  ['transition metal']: 'teal-lightest',
  lanthanoid: 'indigo-lightest',
  actinoid: 'green-lightest',
  ['probably metal']: 'grey-lightest',
  ['probably noble gas']: 'grey-lighter'
}

class ElementBlock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHovered: false,
      offsetX: {},
      offsetY: {}
    }
  }

  componentDidMount() {
    const elementPosition = this.element.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const offsetX = elementPosition.x > viewportWidth / 2 ? { left: '-8rem' } : { right: '-8rem' }
    const offsetY = elementPosition.y > viewportHeight / 2 ? { top: '-8rem' } : { bottom: '-8rem' }

    this.setState({ offsetX, offsetY })
  }

  handleMouseEnter = () => this.setState({ isHovered: true })

  handleMouseLeave = () => this.setState({ isHovered: false })

  render() {
    const {
      element: { atomicNumber, symbol, groupBlock },
      setActiveElement
    } = this.props

    return (
      <div
        className="relative"
        ref={element => (this.element = element)}
        onClick={() => setActiveElement(this.props.element)}
      >
        <div
          onMouseOver={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
          className={`bg-${
            groupBlockStyles[groupBlock]
          } relative flex justify-center items-end border border-grey-dark rounded-sm w-12 h-12 m-1 cursor-pointer`}
        >
          <small className="absolute pin-t pin-r pt-1 pr-1">{atomicNumber}</small>
          <div className="mb-1 text-xl">{symbol}</div>
        </div>
        {this.state.isHovered && (
          <div className="absolute" style={{ ...this.state.offsetY, ...this.state.offsetX }}>
            <ElementDetail element={this.props.element} />
          </div>
        )}
      </div>
    )
  }
}

export default ElementBlock
