import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({url, lang}) => {
  return (
    <Link to={url}>
        <button className='Button'>
            {lang === 'fr' ? 'Commencer' : 'Start'}
        </button>
    </Link>
  )
}

export default Button
