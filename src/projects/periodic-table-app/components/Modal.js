import React, { Component } from 'react'
import axios from 'axios'

import A from '../../../components/A'

class Modal extends Component {
  constructor(props) {
    super(props)

    const groupWiki = {
      nonmetal: 'https://en.wikipedia.org/wiki/Nonmetal',
      ['noble gas']: 'https://en.wikipedia.org/wiki/Noble_gas',
      ['alkali metal']: 'https://en.wikipedia.org/wiki/Alkali_metal',
      ['alkaline earth metal']:
        'https://en.wikipedia.org/wiki/Alkaline_earth_metal',
      metalloid: 'https://en.wikipedia.org/wiki/Metalloid',
      halogen: 'https://en.wikipedia.org/wiki/Halogen',
      metal: 'https://en.wikipedia.org/wiki/Post-transition_metal',
      ['transition metal']: 'https://en.wikipedia.org/wiki/Transition_metal',
      lanthanoid: 'https://en.wikipedia.org/wiki/Lanthanide',
      actinoid: 'https://en.wikipedia.org/wiki/Actinide',
    }

    const periodicVideoLink = () => {
      const { atomicNumber } = this.props.element
      const formattedNumber = () => {
        if (atomicNumber < 10) {
          return `00${atomicNumber}`
        } else if (atomicNumber < 100) {
          return `0${atomicNumber}`
        } else {
          return atomicNumber
        }
      }
      return `http://periodicvideos.com/videos/${formattedNumber()}.htm`
    }

    this.state = {
      wikiSummary: '',
      wikiImage: '',
      groupWiki: groupWiki[this.props.element.groupBlock],
      periodicVideoLink: periodicVideoLink(),
    }
  }

  componentDidMount() {
    // pull the last bit of the wiki url off
    const regex = /wiki\/(.*)/g
    const url = this.props.element.wiki
    const wikiTitle = regex.exec(url)[1]

    const wikiData = `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle}`

    axios.get(wikiData).then(({ data }) =>
      this.setState({
        wikiSummary: data.extract,
        wikiImage: data.thumbnail ? data.thumbnail.source : '',
      })
    )
  }

  render() {
    const {
      element: {
        name,
        atomicMass,
        standardState,
        meltingPoint,
        boilingPoint,
        groupBlock,
        electronicConfiguration,
        yearDiscovered,
        wiki,
      },
      closeModal,
    } = this.props

    const { wikiSummary, wikiImage, groupWiki, periodicVideoLink } = this.state

    return (
      <div
        className="absolute pin flex justify-center items-center w-screen h-screen z-30"
        onClick={() => closeModal()}
      >
        {wikiSummary && (
          <div
            className="flex justify-between relative w-2/3 border bg-grey-lightest shadow-lg p-5"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute pin-t pin-r mr-4 mt-4 px-2 py-1 rounded-full trans trans-fast border border-indigo-light hover:border-indigo-dark text-indigo-light hover:text-indigo-dark hover text-sm"
              onClick={() => closeModal()}
            >
              close
            </button>
            <div className="w-1/2 flex flex-col justify-around items-center">
              <h1>{name}</h1>
              {wikiImage && <img src={wikiImage} alt={name} className="my-3" />}
              <div className="flex flex-col justify-between ">
                <div className="flex my-1">
                  <p className="mr-1 font-semibold">Group:</p>
                  {groupWiki ? (
                    <A classes={['capitalize']} href={groupWiki}>
                      {groupBlock}
                    </A>
                  ) : (
                    <p className="capitalize">{groupBlock}</p>
                  )}
                </div>
                <div className="flex my-1">
                  <p className="mr-1 font-semibold">Standard State:</p>
                  <p className="capitalize">
                    {standardState ? standardState : '???'}
                  </p>
                </div>
                <div className="flex my-1">
                  <p className="mr-1 font-semibold">Atomic Weight:</p>
                  <p>
                    {atomicMass}
                    <A
                      classes={['ml-1', 'font-semibold']}
                      href="https://en.wikipedia.org/wiki/Standard_atomic_weight"
                    >
                      A<sub>r</sub>
                    </A>
                  </p>
                </div>
                <div className="flex my-1">
                  <p className="mr-1 font-semibold">Melting Point:</p>
                  <p>
                    {meltingPoint ? meltingPoint : '???'}
                    {meltingPoint && (
                      <A
                        classes={['ml-1']}
                        href="https://en.wikipedia.org/wiki/Kelvin"
                      >
                        K
                      </A>
                    )}
                  </p>
                </div>
                <div className="flex my-1">
                  <p className="mr-1 font-semibold">Boiling Point:</p>
                  <p>
                    {boilingPoint ? boilingPoint : '???'}
                    {boilingPoint && (
                      <A
                        classes={['ml-1']}
                        href="https://en.wikipedia.org/wiki/Kelvin"
                      >
                        K
                      </A>
                    )}
                  </p>
                </div>
                <div className="flex my-1">
                  <A
                    classes={['mr-1', 'font-semibold']}
                    href="https://en.wikipedia.org/wiki/Electron_configuration"
                  >
                    Electron Configuration:
                  </A>
                  <p>{electronicConfiguration.replace(/\./g, ' ')}</p>
                </div>
                <div className="flex my-1">
                  <p className="mr-1 font-semibold">Year Discovered:</p>
                  <p>{yearDiscovered}</p>
                </div>
              </div>
            </div>

            <p className="w-1/2 my-auto px-10 font-light leading-normal">
              {wikiSummary}
            </p>

            <div className="absolute pin-b pin-r mr-4 mb-4">
              <A classes={['text-sm']} href={wiki}>
                Wikipedia
              </A>
              <A classes={['ml-4', 'text-sm']} href={periodicVideoLink}>
                Video
              </A>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Modal
