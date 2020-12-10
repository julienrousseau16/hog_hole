import React from 'react'

import Button from './Button'

import './Victory.css'

const Victory = ({ lang, winner }) => {
  return (
    <div className='Victory'>
      <div className='VictoryContent'>
        <h1>{winner}</h1>
        <h2>{lang === 'fr' ? 'remporte la partie !' : 'wins this game !'}</h2>
        <img src={require('../pictures/winner.png')} alt='victory rabbid' />
        <Button
          type='nav'
          url='/settings'
          color='validate'
          text={
            lang === 'fr' ? 'Nouvelle Partie' : 'New Game'
          }
        />
      </div>
    </div>
  )
}
export default Victory
