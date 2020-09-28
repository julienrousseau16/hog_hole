import React from 'react'

import './PlayerInput.css'

const PlayerInput = ({ lang, i }) => {

  return (
    <div className='PlayerInput'>
      <label>
        {lang === 'fr' ?
          'Nom du Joueur ' + i
          : 'Name of Player ' + i}
      </label>
      <input type='text' />
    </div>
  )
}
export default PlayerInput
