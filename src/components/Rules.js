import React from 'react'

import Button from './Button'

import { rules } from '../tools/rules'

import './Rules.css'

const Rules = ({ lang }) => {
  return (
    <div className='Rules'>

      <div className='Rules_title_container'>
        <img src={require('../pictures/rabbid_head.png')} alt='rabbid head' />
        <h1>{lang === 'fr' ? 'Règles du Jeu' : 'How to Play'}</h1>
      </div>

      {rules.map((rule, index) => <p key={index}>{lang === 'fr' ? rule.fr : rule.eng}</p>)}

      <Button
        type='nav'
        text={lang === 'fr' ? 'J\'ai compris !' : 'Got it !'}
        color='pink'
        url='/menu' />
    </div>
  )
}
export default Rules
