import React from 'react'
import classnames from 'classnames'
import { Icon } from 'react-icons-kit'
import {
  iosMoon,
  iosSunny,
  toggle,
  toggleFilled,
} from 'react-icons-kit/ionicons'

const toggleStyles = 'rounded-full cursor-pointer'

const iconSize = '35'

export default ({ theme, setTheme }) => (
  <div
    className={classnames([
      { ['text-grey-darkest']: theme === 'light' },
      { ['text-grey-lightest']: theme === 'dark' },
      'absolute pin-t pin-r m-3',
    ])}
  >
    <input
      type="radio"
      name="theme"
      value="light"
      id="set-light-theme"
      onChange={e => setTheme(e.target.value)}
      checked={theme === 'light'}
      className="hidden"
    />
    <label htmlFor="set-light-theme" className={classnames([toggleStyles])}>
      <Icon icon={iosSunny} size={iconSize} />
    </label>

    <Icon icon={theme === 'dark' ? toggleFilled : toggle} size={iconSize} />

    <input
      type="radio"
      name="theme"
      value="dark"
      id="set-dark-theme"
      onChange={e => setTheme(e.target.value)}
      checked={theme === 'dark'}
      className="hidden"
    />
    <label htmlFor="set-dark-theme" className={classnames([toggleStyles])}>
      <Icon icon={iosMoon} size={iconSize} />
    </label>
  </div>
)
