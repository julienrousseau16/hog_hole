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
  const [holes, setHoles] = useState(initialValues)
  const [eggsP1, setEggsP1] = useState(6)
  const [eggsP2, setEggsP2] = useState(6)
  const [eggs, setEggs] = useState({ player1: 6, player2: 6 })
  const [p1Turn, setP1Turn] = useState(true)
  const [dice, setDice] = useState()
  const [comment, setComment] = useState({ fr: '', eng: '' })
  const [turnNb, setTurnNb] = useState(1)
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
      setDice(random)
      diceResult(random)
    }, 4000);
    setTimeout(() => setWindows(prevValues => ({ ...prevValues, comment: true })), 4050);
  }

  const diceResult = dice => {
    const tmp = [...holes]
    if (p1Turn) {
      switch (dice) {
        case 1:
          if (holes[0].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[0].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[0].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 + 1 }))
          }
          break;
        case 2:
          if (holes[1].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[1].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[1].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 + 1 }))
          }
          break;
        case 3:
          if (holes[2].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[2].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[2].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 + 1 }))
          }
          break;
        case 4:
          if (holes[3].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[3].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[3].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 + 1 }))
          }
          break;
        case 5:
          if (holes[3].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[4].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[4].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 + 1 }))
          }
          break;
        default:
          setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 - 1 }))
          setComment(prevValues => ({ ...prevValues, fr: 'Et BIM !! Dans l\'trou du Lapin !' }))
          setComment(prevValues => ({ ...prevValues, eng: 'BAM ! Right in the Rabbid\'s Hole !' }))
          break;
      }
    } else {
      switch (dice) {
        case 1:
          if (holes[0].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[0].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[0].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 + 1 }))
          }
          break;
        case 2:
          if (holes[1].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[1].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[1].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 + 1 }))
          }
          break;
        case 3:
          if (holes[2].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[2].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[2].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 + 1 }))
          }
          break;
        case 4:
          if (holes[3].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[3].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[3].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 + 1 }))
          }
          break;
        case 5:
          if (holes[4].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[4].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[4].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 + 1 }))
          }
          break;
        default:
          setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 - 1 }))
          setComment(prevValues => ({ ...prevValues, fr: 'Et BIM !! Dans l\'trou du Lapin !' }))
          setComment(prevValues => ({ ...prevValues, eng: 'BAM ! Right in the Rabbid\'s Hole !' }))
          break;
      }
    }

  }

  const diceResults = dice => {
    const tmp = [...holes]
    if (p1Turn) {
      switch (dice) {
        case 1:
          if (holes[0].status === 'empty') {
            setComment(prevValues => ({ ...prevValues, fr: 'Bien joué, ce trou est vide !' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Well done, this hole is empty !' }))
            tmp[0].status = 'full'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 - 1 }))
          } else {
            setComment(prevValues => ({ ...prevValues, fr: 'Arf, ce trou est déjà occupé...' }))
            setComment(prevValues => ({ ...prevValues, eng: 'Ouch, this hole is already full...' }))
            tmp[0].status = 'empty'
            setHoles(tmp)
            setEggs(prevValues => ({ ...prevValues, player1: eggs.player1 + 1 }))
          }
          break;

        default:
          setEggs(prevValues => ({ ...prevValues, player2: eggs.player2 - 1 }))
          setComment(prevValues => ({ ...prevValues, fr: 'Et BIM !! Dans l\'trou du Lapin !' }))
          setComment(prevValues => ({ ...prevValues, eng: 'BAM ! Right in the Rabbid\'s Hole !' }))
          break;
      }
    }

  }

  // useEffect(() => {
  //   if (eggsP1 === 0 || eggsP2 === 0) {
  //     setWindows(prevValues => ({ ...prevValues, victory: true }))
  //   }
  // }, [eggsP1, eggsP2])

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
        <li className={p1Turn ? 'currentPlayer' : 'waitingPlayer'}>
          <img className='head' src={require('../pictures/rabbid_head.png')} alt='rabbid head' />
          <h3>{player1}</h3>
          <img src={require('../pictures/egg.png')} alt='egg' />
          <p>x {eggs.player1}</p>
        </li>
        <li className={!p1Turn ? 'currentPlayer' : 'waitingPlayer'}>
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
        name={p1Turn ? player1 : player2} />}
      {windows.comment && !windows.victory && <CommentBox
        lang={lang}
        comment={comment}
        dice={dice}
        name={p1Turn ? player2 : player1}
        p1Turn={p1Turn}
        setWindows={setWindows}
        setP1Turn={setP1Turn}
        turnNb={turnNb}
        setTurnNb={setTurnNb}
      />}
      {windows.victory && <Victory lang={lang} winner={eggs.player1 === 0 ? player1 : player2} />}
    </div>
  )
}
export default GameSession
