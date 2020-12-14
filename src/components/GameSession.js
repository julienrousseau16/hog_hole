import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Button from './Button'
import CommentBox from './CommentBox'
import DiceWindow from './DiceWindow'
import Victory from './Victory'

import './GameSession.css'

const GameSession = ({ lang }) => {

  const initialValues = [
    { id: 1, status: 'empty' },
    { id: 2, status: 'empty' },
    { id: 3, status: 'empty' },
    { id: 4, status: 'empty' },
    { id: 5, status: 'empty' }
  ]
  const [comment, setComment] = useState({ fr: '', eng: '' })
  const [eggs, setEggs] = useState({ 'player1': 6, 'player2': 6 })
  const [holes, setHoles] = useState(initialValues)
  const [params, setParams] = useState({ dice: 0, turnP1: true, turnNb: 1 })
  const [windows, setWindows] = useState({ dice: false, comment: false, victory: false })

  // const player1 = useLocation().players.player1
  // const player2 = useLocation().players.player2
  const player1 = 'Gradubbid'
  const player2 = 'jack'

  const diceRoll = () => {
    const random = Math.floor(Math.random() * (7 - 1) + 1)
    setWindows(prevValues => ({ ...prevValues, dice: true }))
    setTimeout(() => {
      setWindows(prevValues => ({ ...prevValues, dice: false }))
      setParams(prevValues => ({ ...prevValues, dice: random }))
      diceResult(random)
    }, 4000);
    setTimeout(() => setWindows(prevValues => ({ ...prevValues, comment: true })), 4050);
  }

  const diceResult = dice => {
    const tmp = [...holes]
    const player = params.turnP1 ? 'player1' : 'player2'
    const total = params.turnP1 ? eggs.player1 : eggs.player2
    if (dice < 6) {
      if (holes[dice - 1].status === 'empty') {
        setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !', eng: 'Well done, this hole is empty !' }))
        tmp[dice - 1].status = 'full'
        setHoles(tmp)
        setEggs(prevValues => ({ ...prevValues, [player]: total - 1 }))
      } else {
        setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...', eng: 'Ouch, this hole is already full...' }))
        tmp[dice - 1].status = 'empty'
        setHoles(tmp)
        setEggs(prevValues => ({ ...prevValues, [player]: total + 1 }))
      }
    } else {
      setEggs(prevValues => ({ ...prevValues, [player]: total - 1 }))
      setComment(prevValues => ({ ...prevValues, fr: 'Et BIM !! Dans l\'trou du Lapin !', eng: 'BAM ! Right in the Rabbid\'s Hole !' }))
    }
  }

  useEffect(() => {
    if (eggs.player1 === 0 || eggs.player2 === 0) {
      setWindows(prevValues => ({ ...prevValues, victory: true }))
    }
  }, [eggs.player1, eggs.player2])

  return (
    <div className='GameSession'>
      <div className='GameSessionPreview'>
        <ul className='holes_container'>
          {holes.map((hole, index) =>
            <li key={index}>
              <img src={require(hole.status === 'empty' ? '../pictures/empty.png' : '../pictures/full.png')} alt='hole' />
              <p>{index + 1}</p>
            </li>)}
        </ul>
        <div className='RabbidButt'>
          <img src={require('../pictures/butt.png')} alt='Rabbid butt' />
        </div>
      </div>
      <ul className='players_container'>
        <li className={params.turnP1 ? 'currentPlayer' : 'waitingPlayer'}>
          <img className='head' src={require('../pictures/rabbid_head.png')} alt='rabbid head' />
          <h3>{player1}</h3>
          <img src={require('../pictures/egg.png')} alt='egg' />
          <p>x {eggs.player1}</p>
        </li>
        <li className={!params.turnP1 ? 'currentPlayer' : 'waitingPlayer'}>
          <img className='head' src={require('../pictures/rabbid_head.png')} alt='rabbid head' />
          <h3>{player2}</h3>
          <img src={require('../pictures/egg.png')} alt='egg' />
          <p>x {eggs.player2}</p>
        </li>
      </ul>

      <Button
        onClick={diceRoll}
        text={lang === 'fr' ?
          'Lancer le dé'
          : 'Roll the dice'}
        color='blue' />

      {windows.dice && <DiceWindow
        lang={lang}
        name={params.turnP1 ? player1 : player2} />}

      {windows.comment && !windows.victory && <CommentBox
        lang={lang}
        comment={comment}
        dice={params.dice}
        name={params.turnP1 ? player2 : player1}
        turnP1={params.turnP1}
        setParams={setParams}
        turnNb={params.turnNb}
        setWindows={setWindows}
      />}
      {windows.victory && <Victory lang={lang} winner={eggs.player1 === 0 ? player1 : player2} />}

    </div>
  )
}
export default GameSession
