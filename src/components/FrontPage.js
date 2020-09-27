import React from 'react'

import Button from './Button'

import './FrontPage.css'

const FrontPage = ({ lang }) => {
  return (
    <div className='FrontPage'>
      <div className='FrontPage_container'>
        <h1 className='FrontPage_title'>
          {lang === 'fr' ? 'Le Trou du Cochon' : "The Hog's Hole"}
        </h1>
        <img className='FrontPage_logo' src={require('../pictures/hogingrass.png')} alt='hog-logo' />
      </div>
      <Button
        text={lang === 'fr' ? 'Commencer' : 'Start'}
        url='/menu' />
    </div>
  )
}

export default FrontPage
