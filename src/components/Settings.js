import React, { useState } from 'react'

import Button from './Button'

import './Settings.css'

const Settings = ({ lang }) => {

  const [playersNumber, setPlayersNumber] = useState(2)
  const [showInputs, setShowInputs] = useState(false)
  const [player1, setPlayer1] = useState('Bugs Buddy')
  const [player2, setPlayer2] = useState('Rabbid Jacob')
  const [player3, setPlayer3] = useState('Ink\' Rabbidle')
  const [player4, setPlayer4] = useState('Abu Rabbid')

  return (
    <div className='Settings'>

      <h1>
        {lang === 'fr' ?
          'Avant de commencer...'
          : 'Before you start...'}
      </h1>

      <div className="playersNumber">
        <label>
          {lang === 'fr' ?
            'Sélectionnez le nombre de joueurs :'
            : 'Choose the number of players :'}
        </label>
        <div className='Number_selection'>
          <select
            onClick={() => setShowInputs(false)}
            onChange={e => setPlayersNumber(e.target.value)}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          <Button
            onClick={() => setShowInputs(true)}
            text={lang === 'fr' ? 'Valider' : 'OK'} />
        </div>
      </div>

      {showInputs &&
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
          {playersNumber > 2 &&
            <>
              <label>
                {lang === 'fr' ?
                  'Nom du Joueur 3'
                  : 'Name of Player 3'}
              </label>
              <input
                required
                onChange={e => setPlayer3(e.target.value)}
                type='text'
                value={player3}
              />
            </>
          }
          {playersNumber > 3 &&
            <>
              <label>
                {lang === 'fr' ?
                  'Nom du Joueur 4'
                  : 'Name of Player 4'}
              </label>
              <input
                required
                onChange={e => setPlayer4(e.target.value)}
                type='text'
                value={player4}
              />
            </>
          }
          <Button
            type='nav'
            url='/gamesession'
            text={lang === 'fr' ? 'C\'est parti !' : 'Here we go !'}
            color='validate' />
        </div>}

    </div>
  )
}
export default Settings
