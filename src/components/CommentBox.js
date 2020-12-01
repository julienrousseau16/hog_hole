import React from 'react'
import Button from './Button'

import './CommentBox.css'

const CommentBox = ({ lang, comment, dice, name, name2, p1Turn, setComWindow, setP1Turn }) => {
  return (
    <div className='CommentBox'>
      <div className='CommentBoxContent'>
        <h1>Verdict...</h1>
        <p>{
          lang === 'fr' ?
            `L'oeuf de ${name} a atterit dans le trou n° ${dice}`
            : `${name}'s egg landed in Hole n° ${dice}`
        }...</p>
        <img src={require(
          dice === 6 ? '../pictures/bingonobg.png'
            : comment.includes('Bien' || 'Well') ? '../pictures/smile.png'
            : '../pictures/missed.png'
        )} alt='result' />
        <p id='Comment'>{comment}</p>
        <div className='CommentBoxActions'>
          <Button
            color='validate'
            onClick={() => setComWindow(false)}
            text={
              lang === 'fr' ? 'Rejouer ?!' : 'Roll again ?!'
            }
          />
          <Button
            color='cancel'
            onClick={() => {
              setComWindow(false)
              setP1Turn(!p1Turn)
            }}
            text={
              lang === 'fr' ?
                `À ${name2} !`
                : `${name2}'s turn !`
            }
          />
        </div>
      </div>
    </div>
  )
}
export default CommentBox

