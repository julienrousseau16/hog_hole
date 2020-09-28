import React, { useState } from 'react'

import Button from './Button'

import PlayerInput from './PlayerInput'

import './Settings.css'

const Settings = ({ lang }) => {

  const [playersNumber, setPlayersNumber] = useState(2)
  const [inputList, setInputList] = useState([])
  const [showInputs, setShowInputs] = useState(false)
  // const [player1, setPlayer1] = useState('')
  // const [player2, setPlayer2] = useState('')
  // const [player3, setPlayer3] = useState('')
  // const [player4, setPlayer4] = useState('')

  const numSelect = e => {
    setPlayersNumber(e.target.value)
  }
  const numValid = () => {
    setShowInputs(true)
    const tmp = []
    for (let i = 0; i < playersNumber; i++) {
      tmp.push({})
    }
    setInputList(tmp)
  }

  return (
    <div className='Settings'>

      <h1>
        {lang === 'fr' ?
          'Avant de commencer... !'
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
            // onClick={() => setShowInputs(false)}
            onChange={numSelect}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          <Button
            onClick={numValid}
            text={lang === 'fr' ? 'Valider' : 'OK'}
            color='validate' />
        </div>
      </div>
      <div className='inputs_container'>
        {showInputs && inputList.map((item, index) => <PlayerInput key={index} i={index + 1} lang={lang} />)}
      </div>
    </div>
  )
}
export default Settings
