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
        <img src={require('../pictures/rabbids-invasion-wallpaper-best-4k-wallpaper-rabbid-invasion-wallpaper-hd-115629678900thsrztun2.png')} />
        <p>{name}
          {lang === 'fr' ?
            ' s\'apprête à tirer...'
            : ' prepares to shoot...'}
        </p>
        {dice && <div id="platform">
          <div id="dice">
            <div class="side front">
              <div class="dot center"></div>
            </div>
            <div class="side front inner"></div>
            <div class="side top">
              <div class="dot dtop dleft"></div>
              <div class="dot dbottom dright"></div>
            </div>
            <div class="side top inner"></div>
            <div class="side right">
              <div class="dot dtop dleft"></div>
              <div class="dot center"></div>
              <div class="dot dbottom dright"></div>
            </div>
            <div class="side right inner"></div>
            <div class="side left">
              <div class="dot dtop dleft"></div>
              <div class="dot dtop dright"></div>
              <div class="dot dbottom dleft"></div>
              <div class="dot dbottom dright"></div>
            </div>
            <div class="side left inner"></div>
            <div class="side bottom">
              <div class="dot center"></div>
              <div class="dot dtop dleft"></div>
              <div class="dot dtop dright"></div>
              <div class="dot dbottom dleft"></div>
              <div class="dot dbottom dright"></div>
            </div>
            <div class="side bottom inner"></div>
            <div class="side back">
              <div class="dot dtop dleft"></div>
              <div class="dot dtop dright"></div>
              <div class="dot dbottom dleft"></div>
              <div class="dot dbottom dright"></div>
              <div class="dot center dleft"></div>
              <div class="dot center dright"></div>
            </div>
            <div class="side back inner"></div>
            <div class="side cover x"></div>
            <div class="side cover y"></div>
            <div class="side cover z"></div>
          </div>
        </div>}
      </div>
    </div>
  )
}
export default DiceWindow