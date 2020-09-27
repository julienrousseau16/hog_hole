import React from 'react'

import Button from './Button'

import './LandingMenu.css'

const LandingMenu = ({ lang }) => {
  return (
    <div className='LandingMenu'>
      <p>
        {lang === 'fr' ?
          'Bienvenue sur la version digitale du'
          : 'Welcome on the digital reproduction of'}
      </p>
      <h1>
        {lang === 'fr' ?
          'Trou du Cochon !'
          : 'The Hog\'s Hole !'}
      </h1>

      <div className='LandingMenu_container'>
        <Button
          text={lang === 'fr' ? 'Règles du Jeu' : 'How to Play'}
          url='/rules' />
        <Button
          text={lang === 'fr' ? 'Faire une partie' : 'Start a game'}
          url='/gamesession' />
      </div>
    </div>
  )
}

export default LandingMenu
