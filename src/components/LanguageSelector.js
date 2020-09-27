import React from 'react'

import './LanguageSelector.css'

const LanguageSelector = ({ setLang }) => {
  return (
    <div className='LanguageSelector'>
      <img
        onClick={() => setLang('fr')}
        className='flag'
        src={require('../pictures/fr.png')}
        alt='french flag' />
      <img
        onClick={() => setLang('eng')}
        className='flag'
        src={require('../pictures/eng.png')}
        alt='uk flag' />
    </div>
  )
}
export default LanguageSelector
