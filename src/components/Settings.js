import React, { useState } from 'react'
import Button from './Button'

import './Settings.css'

const Settings = ({ lang }) => {

  const [players, setPlayers] = useState({ player1: 'Coco', player2: 'Lapin' })

  const nameRegister = (e) => {
    const name = e.target.value
    const player = e.target.name
    if (name.length <= 10) {
      setPlayers(prevValues => ({ ...prevValues, [player]: name })) 
    }
  }

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
          onChange={nameRegister}
          type='text'
          value={players.player1}
          name='player1'
        />
        <label>
          {lang === 'fr' ?
            'Nom du Joueur 2'
            : 'Name of Player 2'}
        </label>
        <input
          required
          onChange={nameRegister}
          type='text'
          value={players.player2}
          name='player2'
        />
        <Button
          type='nav'
          url={{ pathname: '/gamesession', players }}
          text={lang === 'fr' ? 'C\'est parti !' : 'Here we go !'}
          color='validate' />
      </div>

    </div>
  )
}
export default Settings
