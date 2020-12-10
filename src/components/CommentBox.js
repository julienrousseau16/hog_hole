import React, { useEffect, useState } from 'react'

import Button from './Button'

import './CommentBox.css'

const CommentBox = ({ lang, comment, dice, name, name2, p1Turn, setComWindow, setP1Turn, turnNb, setTurnNb }) => {

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
    <div className='CommentBox'>
      <div className='CommentBoxContent'>
        <h1>{
          lang === 'fr' ?
            `Trou n° ${dice}`
            : `Hole n° ${dice}`
        } !!</h1>
        <img src={require(
          dice === 6 ? '../pictures/bingonobg.png'
            : comment.includes('Bien' || 'Well') ? '../pictures/smile.png'
              : '../pictures/sad.png'
        )} alt='result' />
        <p id='Comment'>{comment}</p>
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
    </div>
  )
}
export default CommentBox

