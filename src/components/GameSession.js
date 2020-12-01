import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import Button from './Button'

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

  const player1 = useLocation().players.player1
  const player2 = useLocation().players.player2

  const diceRoll = () => {
    const random = Math.floor(Math.random() * (7 - 1) + 1)
    setDice(random)
    diceResult(random)
    setP1Turn(!p1Turn)
  }

  const diceResult = dice => {
    if (p1Turn) {
      switch (dice) {
        case 1:
          if (hole1 === 'empty') {
            setHole1('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setHole1('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
          case 2:
          if (hole2 === 'empty') {
            setHole2('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setHole2('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
          case 3:
          if (hole3 === 'empty') {
            setHole3('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setHole3('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
          case 4:
            if (hole4 === 'empty') {
              setHole4('full')
              setEggsP1(eggsP1 - 1)
            } else {
              setHole4('empty')
              setEggsP1(eggsP1 + 1)
            }
            break;
        case 5:
          if (hole5 === 'empty') {
            setHole5('full')
            setEggsP1(eggsP1 - 1)
          } else {
            setHole5('empty')
            setEggsP1(eggsP1 + 1)
          }
          break;
        default:
          setEggsP1(eggsP1 - 1)
          console.log('le trou du lapin')
          break;
      }
    } else {
      switch (dice) {
        case 1:
          if (hole1 === 'empty') {
            setHole1('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setHole1('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
          case 2:
          if (hole2 === 'empty') {
            setHole2('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setHole2('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
          case 3:
          if (hole3 === 'empty') {
            setHole3('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setHole3('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
          case 4:
            if (hole4 === 'empty') {
              setHole4('full')
              setEggsP2(eggsP2 - 1)
            } else {
              setHole4('empty')
              setEggsP2(eggsP2 + 1)
            }
            break;
        case 5:
          if (hole5 === 'empty') {
            setHole5('full')
            setEggsP2(eggsP2 - 1)
          } else {
            setHole5('empty')
            setEggsP2(eggsP2 + 1)
          }
          break;
        default:
          setEggsP2(eggsP2 - 1)
          console.log('le trou du lapin')
          break;
      }
    }

  }

  return (
    <div className='GameSession'>
      <h1>
        {lang === 'fr' ?
          'Session de Jeu'
          : 'Game Session'}
      </h1>

      <div className='holes_container'>
        <img
          src={hole1 === 'empty' ?
            require('../pictures/empty.png')
            : require('../pictures/full.png')}
          alt='hole' />
        <img
          src={hole2 === 'empty' ?
            require('../pictures/empty.png')
            : require('../pictures/full.png')}
          alt='hole' />
        <img
          src={hole3 === 'empty' ?
            require('../pictures/empty.png')
            : require('../pictures/full.png')}
          alt='hole' />
        <img
          src={hole4 === 'empty' ?
            require('../pictures/empty.png')
            : require('../pictures/full.png')}
          alt='hole' />
        <img
          src={hole5 === 'empty' ?
            require('../pictures/empty.png')
            : require('../pictures/full.png')}
          alt='hole' />
      </div>
      <ul className='players_container'>
        <li className={p1Turn ? 'currentPlayer' : 'waitingPlayer'}>
          <h3>{player1}</h3>
          <img src={require('../pictures/egg.png')} alt='egg' />
          <p>x {eggsP1}</p>
        </li>
        <li className={!p1Turn ? 'currentPlayer' : 'waitingPlayer'}>
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
      <p>{!p1Turn ? player1 : player2} a fait un</p>
      <p>{dice}</p>
    </div>
  )
}
export default GameSession
