import React, { useEffect, useState } from 'react'

import Button from './Button'

import './CommentBox.css'

const CommentBox = ({ lang, comment, dice, name, name2, p1Turn, setComWindow, setP1Turn, turnNb, setTurnNb }) => {

  const [visible, setVisible] = useState(true)
  const [replay, setReplay] = useState(false)
  const [switchTurn, setSwitchTurn] = useState(true)

  const playAgain = () => {
    setTurnNb(turnNb + 1)
    setComWindow(false)
  }

  const changeTurn = () => {
    setTurnNb(1)
    setP1Turn(!p1Turn)
    setComWindow(false)
  }

  useEffect(() => {
    if (turnNb === 1 && dice === 6) {
      setSwitchTurn(false)
    }
    if (turnNb < 3) {
      setReplay(true)
    } else {
      setReplay(false)
    }
  }, [turnNb, dice])

  return (
    <div className='CommentBox' style={visible ? { backgroundColor: 'rgba(0, 0, 0, 0.8)' } : { backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className='CommentBoxContent' style={visible ? { visibility: 'visible' } : { visibility: 'hidden' }}>
        <h1>{
          lang === 'fr' ?
            `Trou n° ${dice}`
            : `Hole n° ${dice}`
        } !!</h1>
        <img src={require(
          dice === 6 ? '../pictures/bingonobg.png'
            : comment.fr.includes('Bien') ? '../pictures/smile.png'
              : '../pictures/sad.png'
        )} alt='result' />
        <p id='Comment'>{
          lang === 'fr' ?
            comment.fr
            : comment.eng
        }</p>
        <div className='CommentBoxActions'>
          {replay && <Button
            color='validate'
            onClick={playAgain}
            text={
              lang === 'fr' ? 'Rejouer' : 'Roll again'
            }
          />}
          {switchTurn && <Button
            color='cancel'
            onClick={changeTurn}
            text={
              lang === 'fr' ?
                `À ${name2} !`
                : `${name2}'s turn !`
            }
          />}
        </div>
      </div>
      <div className='CommentBoxCheck' onClick={() => setVisible(!visible)}>
        <p>
          {
            lang === 'fr' && visible ?
              'Vérifier la donne ?'
              : lang === 'fr' && !visible ?
                'Retour au jeu'
                : lang !== 'fr' && visible ?
                  'Check the situation ?'
                  : 'Back to the game'
          }
        </p>
        <img src={require('../pictures/magglass.png')} alt='magnifying glass' />
      </div>
    </div>
  )
}
export default CommentBox

