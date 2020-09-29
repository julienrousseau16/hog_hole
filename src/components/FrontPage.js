import React from 'react'

import Button from './Button'

import './FrontPage.css'

const FrontPage = ({ lang }) => {
  return (
    <div className='FrontPage'>
      <div className='FrontPage_container'>
        <h1 className='FrontPage_title'>
          {lang === 'fr' ? 'Le Trou du Lapin' : "The Rabbid's Hole"}
        </h1>
        <img className='FrontPage_logo' src={require('../pictures/intro_rabbid.png')} alt='hog-logo' />
      </div>
      <Button
        type='nav'
        text={lang === 'fr' ? 'Commencer' : 'Start'}
        color='blue'
        url='/menu' />
    </div>
  )
}

export default FrontPage
