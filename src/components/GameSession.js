import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Button from './Button'
import CommentBox from './CommentBox'
import DiceWindow from './DiceWindow'
import Victory from './Victory'

import './GameSession.css'

const GameSession = ({ lang }) => {

  const [hole1, setHole1] = useState('empty')
  const [hole2, setHole2] = useState('empty')
  const [hole3, setHole3] = useState('empty')
  const [hole4, setHole4] = useState('empty')
  const [hole5, setHole5] = useState('empty')
  const [eggsP1, setEggsP1] = useState(6)
  const [eggsP2, setEggsP2] = useState(6)
  const [p1Turn, setP1Turn] = useState(true)
  const [dice, setDice] = useState()
  const [comment, setComment] = useState({ fr: '', eng: '' })
  const [turnNb, setTurnNb] = useState(1)

  const [diceWindow, setDiceWindow] = useState(false)
  const [comWindow, setComWindow] = useState(false)
  const [vicWindow, setVicWindow] = useState(false)

  // const player1 = useLocation().players.player1
  // const player2 = useLocation().players.player2
  const player1 = 'joe'
  const player2 = 'jack'

  const diceRoll = () => {
    const random = Math.floor(Math.random() * (7 - 1) + 1)
    setDiceWindow(true)
    setTimeout(() => {
      setDiceWindow(false)
      setDice(random)
      diceResult(random)
    }, 4000);
    setTimeout(() => setComWindow(true), 4050);
  }

  const diceResult = dice => {
    if (p1Turn) {
      switch (dice) {
        case 1:
          if (hole1 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole1('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole1('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
        case 2:
          if (hole2 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole2('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole2('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
        case 3:
          if (hole3 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole3('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole3('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
        case 4:
          if (hole4 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole4('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole4('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
        case 5:
          if (hole5 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole5('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole5('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
        default:
          setEggsP1(eggsP1 - 1)
          setComment(prevValues => ({ ...prevValues, fr: 'Et BIM !! Dans l\'trou du Lapin !' }))
          setComment(prevValues => ({ ...prevValues, eng: 'BAM ! Right in the Rabbid\'s Hole !' }))
          break;
      }
    } else {
      switch (dice) {
        case 1:
          if (hole1 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole1('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole1('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
        case 2:
          if (hole2 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole2('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole2('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
        case 3:
          if (hole3 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole3('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole3('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
        case 4:
          if (hole4 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole4('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole4('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
        case 5:
          if (hole5 === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            setHole5('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            setHole5('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
        default:
          setEggsP2(eggsP2 - 1)
          setComment(prevValues => ({ ...prevValues, fr: 'Et BIM !! Dans l\'trou du Lapin !' }))
          setComment(prevValues => ({ ...prevValues, eng: 'BAM ! Right in the Rabbid\'s Hole !' }))
          break;
      }
    }

  }

  useEffect(() => {
    if (eggsP1 === 4 || eggsP2 === 4) {
      setVicWindow(true)
    }
  }, [eggsP1, eggsP2])

  return (
    <div className='GameSession'>
      <h1>
        {lang === 'fr' ?
          'Session de Jeu'
          : 'Game Session'}
      </h1>
      <div className='GameSessionPreview'>
        <ul className='holes_container'>
          <li>
            <img
              src={hole1 === 'empty' ?
                require('../pictures/empty.png')
                : require('../pictures/full.png')}
              alt='hole' />
              <p>1</p>
          </li>
          <li>
            <img
              src={hole2 === 'empty' ?
                require('../pictures/empty.png')
                : require('../pictures/full.png')}
              alt='hole' />
              <p>2</p>
          </li>
          <li>
            <img
              src={hole3 === 'empty' ?
                require('../pictures/empty.png')
                : require('../pictures/full.png')}
              alt='hole' />
              <p>3</p>
          </li>
          <li>
            <img
              src={hole4 === 'empty' ?
                require('../pictures/empty.png')
                : require('../pictures/full.png')}
              alt='hole' />
              <p>4</p>
          </li>
          <li>
            <img
              src={hole5 === 'empty' ?
                require('../pictures/empty.png')
                : require('../pictures/full.png')}
              alt='hole' />
              <p>5</p>
          </li>
        </ul>
        <div className='RabbidButt'>
          <img src={require('../pictures/butt.png')} alt='Rabbid butt' />
        </div>
      </div>
      <ul className='players_container'>
        <li className={p1Turn ? 'currentPlayer' : 'waitingPlayer'}>
          <img className='head' src={require('../pictures/rabbid_head.png')} alt='rabbid head' />
          <h3>{player1}</h3>
          <img src={require('../pictures/egg.png')} alt='egg' />
          <p>x {eggsP1}</p>
        </li>
        <li className={!p1Turn ? 'currentPlayer' : 'waitingPlayer'}>
          <img className='head' src={require('../pictures/rabbid_head.png')} alt='rabbid head' />
          <h3>{player2}</h3>
          <img src={require('../pictures/egg.png')} alt='egg' />
          <p>x {eggsP2}</p>
        </li>
      </ul>

      <Button
        onClick={diceRoll}
        text={lang === 'fr' ?
          'Lancer le dé'
          : 'Roll the dice'}
        color='blue' />

      {diceWindow && <DiceWindow
        lang={lang}
        name={p1Turn ? player1 : player2} />}
      {comWindow && !vicWindow && <CommentBox
        lang={lang}
        comment={comment}
        dice={dice}
        name={p1Turn ? player1 : player2}
        name2={p1Turn ? player2 : player1}
        p1Turn={p1Turn}
        setComWindow={setComWindow}
        setP1Turn={setP1Turn}
        turnNb={turnNb}
        setTurnNb={setTurnNb}
      />}
      {vicWindow && <Victory lang={lang} winner={eggsP1 === 4 ? player1 : player2} />}
    </div>
  )
}
export default GameSession
