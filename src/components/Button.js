import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({ onClick, type, text, color, url }) => {

  const colorSelector = arg => {
    switch (arg) {
      case 'validate':
        return 'validate'
      case 'cancel':
        return 'cancel'
      case 'pink':
        return 'pink'
      case 'blue':
        return 'blue'
      default:
        return 'default'
    }
  }
  if (type === 'nav') {
    return (
      <Link to={url}>
        <button
          onClick={onClick}
          id={colorSelector(color)}
          className='Button'>
          {text}
        </button>
      </Link>
    )
  } else {
    return (
      <button
        onClick={onClick}
        id={colorSelector(color)}
        className='Button'>
        {text}
      </button>
    )
  }
}

export default Button
