import React, { useState } from 'react'

import './GameSession.css'

const GameSession = ({ lang }) => {

  const [hole1, setHole1] = useState('empty')
  const [hole2, setHole2] = useState('empty')
  const [hole3, setHole3] = useState('empty')
  const [hole4, setHole4] = useState('empty')
  const [hole5, setHole5] = useState('empty')

  const [eggsP1, setEggP1] = useState(6)
  const [eggsP2, setEggP2] = useState(6)

  const toggle = () => {
    hole1 === 'empty' ? setHole1('full') : setHole1('empty')
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
        <li className='each_player'>
          <h3>Bugs Buddy</h3>
          <img src={require('../pictures/egg.png')} alt='egg' />
          <p>x {eggsP1}</p>
        </li>
        <li className='each_player'>
          <h3>Rabbid Jacob</h3>
          <img src={require('../pictures/egg.png')} alt='egg' />
          <p>x {eggsP2}</p>
        </li>
      </ul>

      <button onClick={toggle}>Remplir 1</button>
    </div>
  )
}
export default GameSession
