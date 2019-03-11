import React, { Component } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import { GridLoader } from 'react-spinners'

import ElementBlock from './components/ElementBlock'
import Modal from './components/Modal'

class PeriodicTableApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elements: [],
      activeElement: false,
    }
  }

  // launches an ajax request to the element data and stores that info in the PeriodicTable componenent's state
  componentDidMount() {
    axios
      .get('https://rawgit.com/dbyars/periodic-table-1/master/data.json')
      .then(({ data }) => {
        const groups = [
          [1, 3, 11, 19, 37, 55, 87],
          [4, 12, 20, 38, 56, 88],
          [21, 39],
          [22, 40, 72, 104],
          [23, 41, 73, 105],
          [24, 42, 74, 106],
          [25, 43, 75, 107],
          [26, 44, 76, 108],
          [27, 45, 77, 109],
          [28, 46, 78, 110],
          [29, 47, 79, 111],
          [30, 48, 80, 112],
          [5, 13, 31, 49, 81, 113],
          [6, 14, 32, 50, 82, 114],
          [7, 15, 33, 51, 83, 115],
          [8, 16, 34, 52, 84, 116],
          [9, 17, 35, 53, 85, 117],
          [2, 10, 18, 36, 54, 86, 118],
        ]
        const lanthanides = [
          57,
          58,
          59,
          60,
          61,
          62,
          63,
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
        ]

        const actinides = [
          89,
          90,
          91,
          92,
          93,
          94,
          95,
          96,
          97,
          98,
          99,
          100,
          101,
          102,
          103,
        ]

        // const groupBlocks = data.reduce((acc, e) => (acc.includes(e.groupBlock) ? acc : [...acc, e.groupBlock]), [])

        this.setState({
          elements: data,
          groups: groups.map(group => group.map(i => data[i - 1])),
          lanthanides: lanthanides.map(i => data[i - 1]),
          actinides: actinides.map(i => data[i - 1]),
        })
      })
  }

  setActiveElement = element => this.setState({ activeElement: element })

  clearActiveElement = () => this.setState({ activeElement: false })

  render() {
    return !this.state.elements.length ? (
      <div className="min-h-screen flex justify-around items-center">
        <GridLoader
          loading={!this.state.elements.length}
          size={60}
          margin="20px"
          color="#6574cd"
        />
      </div>
    ) : (
      <div
        className="relative min-h-screen flex flex-col justify-around items-center bg-grey-lightest"
        onKeyUp={e => e.key === 'Escape' && this.clearActiveElement()}
        tabIndex="0"
      >
        <h1>Periodic Table of the Elements</h1>
        <div
          className={classnames([
            'flex',
            'flex-col',
            { blur: this.state.activeElement },
          ])}
        >
          <div className="flex pb-6">
            {this.state.groups.map((elements, i) =>
              i !== 2 ? (
                <div
                  key={elements[0].atomicMass}
                  className="flex flex-col justify-end"
                >
                  {elements.map(element => (
                    <ElementBlock
                      key={element.name}
                      element={element}
                      setActiveElement={this.setActiveElement}
                    />
                  ))}
                </div>
              ) : (
                <div
                  key={elements[0].atomicMass}
                  className="flex flex-col justify-end"
                >
                  {elements.map(element => (
                    <ElementBlock
                      key={element.name}
                      element={element}
                      setActiveElement={this.setActiveElement}
                    />
                  ))}
                  <div className="flex justify-center items-center w-12 h-12 m-1 border border-grey-dark rounded-sm bg-indigo-lightest">
                    <small>57-71</small>
                  </div>
                  <div className="flex justify-center items-center w-12 h-12 m-1 border border-grey-dark rounded-sm bg-green-lightest">
                    <small>89-103</small>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-end">
              {this.state.lanthanides.map(element => (
                <ElementBlock
                  key={element.name}
                  element={element}
                  setActiveElement={this.setActiveElement}
                />
              ))}
            </div>
            <div className="flex justify-end">
              {this.state.actinides.map(element => (
                <ElementBlock
                  key={element.name}
                  element={element}
                  setActiveElement={this.setActiveElement}
                />
              ))}
            </div>
          </div>
        </div>
        {this.state.activeElement && (
          <Modal
            element={this.state.activeElement}
            closeModal={this.clearActiveElement}
          />
        )}
      </div>
    )
  }
}

export default PeriodicTableApp
