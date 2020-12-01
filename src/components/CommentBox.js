import React from 'react'
import Button from './Button'

import './CommentBox.css'

const CommentBox = ({ lang, comment, dice, name, name2, p1Turn, setComWindow, setP1Turn }) => {
  return (
    <div className='CommentBox'>
      <div className='CommentBoxContent'>
        <h1>CommentBox</h1>
        <p>{
          lang === 'fr' ?
            `L'oeuf de ${name} a atterit dans le trou n° ${dice}`
            : `${name}'s egg landed in Hole n° ${dice}`
        }</p>
        <p>{comment}</p>
        <div>
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
                `Au tour de ${name2}`
                : `${name2}'s turn`
            }
          />
        </div>
      </div>
    </div>
  )
}
export default CommentBox

