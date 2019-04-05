import React from 'react'

export default ({ theme, setTheme, ...props }) => {
  const darkTheme = theme === 'dark'
  return (
    <button {...props} onClick={() => setTheme(darkTheme ? 'light' : 'dark')}>
      {darkTheme ? 'LIGHT' : 'DARK'}
    </button>
  )
}
