import React from 'react'

import Button from './Button'

import './Rules.css'

const Rules = ({ lang }) => {
  return (
    <div className='Rules'>

      <div className='Rules_title_container'>
        <img src={require('../pictures/hoghead.png')} alt='hog head'/>
        <h1>
          {lang === 'fr' ?
            'Règles du Jeu'
            : 'How to Play'}
        </h1>
      </div>

      <p>
        {lang === 'fr' ?
          'Chaque joueur dispose de 6 pions dont il devra essayer de se débarrasser en premier pour remporter la partie.'
          : 'Each player has 6 pawns that they must try to get rid of first, in order to win the game.'}
      </p>

      <p>
        {lang === 'fr' ?
          'Le dé nous indique ou l’on doit déposer un pion, mais si le trou est déjà occupé, le joueur ne dépose pas son pion, il récupère le pion présent sur ce numéro.'
          : 'The dice indicates in which location we should drop a pawn, but if the location is already occupied, the player does not place his pawn, but collects the pawn present on that number.'}
      </p>

      <p>
        {lang === 'fr' ?
          'Le joueur peut lancer le dé jusqu’à 3 fois s’il n’est pas tombé sur un trou déjà occupé.'
          : 'The player may roll the dice up to 3 times if he has not fallen on a hole already occupied.'}
      </p>

      <p>
        {lang === 'fr' ?
          'À compléter...'
          : 'To be filled...'}
      </p>

      <Button
        text={lang === 'fr' ? 'J\'ai compris !' : 'Got it !'}
        color='pink'
        url='/menu' />
    </div>
  )
}
export default Rules
