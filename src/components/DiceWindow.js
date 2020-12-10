import React, { useState, useEffect } from 'react'

import './DiceWindow.css'

const DiceWindow = ({ lang, name }) => {

  const [dice, setDice] = useState(false)

  useEffect(() => {
    setTimeout(() => setDice(true), 2000);
  }, [])

  return (
    <div className='DiceWindow'>
      <div className='DiceWindowContent'>
        <h1>
          {lang === 'fr' ? 'Attention !' : 'Watch out !'}
        </h1>
        <img src={require('../pictures/thrower.png')} alt='rabbid throwing an egg' />
        <p>{name}
          {lang === 'fr' ?
            ' s\'apprête à tirer...'
            : ' prepares to shoot...'}
        </p>
        {dice && <div id="platform">
          <div id="dice">
            <div className="side front">
              <div className="dot center"></div>
            </div>
            <div className="side front inner"></div>
            <div className="side top">
              <div className="dot dtop dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side top inner"></div>
            <div className="side right">
              <div className="dot dtop dleft"></div>
              <div className="dot center"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side right inner"></div>
            <div className="side left">
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side left inner"></div>
            <div className="side bottom">
              <div className="dot center"></div>
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side bottom inner"></div>
            <div className="side back">
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
              <div className="dot center dleft"></div>
              <div className="dot center dright"></div>
            </div>
            <div className="side back inner"></div>
            <div className="side cover x"></div>
            <div className="side cover y"></div>
            <div className="side cover z"></div>
          </div>
        </div>}
      </div>
    </div>
  )
}
export default DiceWindow