import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({ text, url }) => {
  return (
    <Link to={url}>
      <button className='Button'>
        {text}
      </button>
    </Link>
  )
}

export default Button
