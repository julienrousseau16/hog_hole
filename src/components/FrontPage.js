import React from 'react'

import Button from './Button'

import './FrontPage.css'

const FrontPage = ({lang}) => {
  return (
    <div className='FrontPage'>
      <div className='FrontPage_container'>
        <h1 className='FrontPage_title'>
          {lang === 'fr' ? 'Le Trou du Cochon' : "The Hog's Hole"}
        </h1>
        <img className='FrontPage_logo' src={require('../pictures/hog.png')} alt='hog-logo' /> 
        <img className='grass' src={require('../pictures/grass.png')} alt='grass' />
      </div>
      <Button url='/gameSession' lang={lang} />
    </div>
  )
}

export default FrontPage
