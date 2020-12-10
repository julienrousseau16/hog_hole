import React, { useState } from 'react'
import Button from './Button'

import './Settings.css'

const Settings = ({ lang }) => {

  const [player1, setPlayer1] = useState('Bugs Rabbid')
  const [player2, setPlayer2] = useState('Ink\' Rabbidle')

  return (
    <div className='Settings'>

      <h1>
        {lang === 'fr' ?
          'Avant de commencer...'
          : 'Before you start...'}
      </h1>
      <div className='inputs_container'>
        <label>
          {lang === 'fr' ?
            'Nom du Joueur 1'
            : 'Name of Player 1'}
        </label>
        <input
          required
          onChange={e => setPlayer1(e.target.value)}
          type='text'
          value={player1}
        />
        <label>
          {lang === 'fr' ?
            'Nom du Joueur 2'
            : 'Name of Player 2'}
        </label>
        <input
          required
          onChange={e => setPlayer2(e.target.value)}
          type='text'
          value={player2}
        />
        <Button
          type='nav'
          url={{ pathname: '/gamesession', players: { player1, player2 } }}
          text={lang === 'fr' ? 'C\'est parti !' : 'Here we go !'}
          color='validate' />
      </div>

    </div>
  )
}
export default Settings
