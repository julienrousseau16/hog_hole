import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({ text, color, url }) => {

  const colorSelector = arg => {
    switch (arg) {
      case 'validate':
        return 'validate'
      case 'cancel':
        return 'cancel'
      case 'pink':
        return 'pink'
      default:
        return 'default'
    }
  }

  return (
    <Link to={url}>
      <button
        id={colorSelector(color)}
        className='Button'>
        {text}
      </button>
    </Link>
  )
}

export default Button
