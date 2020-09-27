import React from 'react'

import './LanguageSelector.css'

const LanguageSelector = ({ lang, setLang }) => {
  return (
    <div className='LanguageSelector'>
      <img
        onClick={() => setLang('fr')}
        className={lang ==='fr' ? 'flag' : 'noflag'}
        src={require('../pictures/fr.png')}
        alt='french flag' />
      <img
        onClick={() => setLang('eng')}
        className={lang ==='fr' ? 'noflag' : 'flag'}
        src={require('../pictures/eng.png')}
        alt='uk flag' />
    </div>
  )
}
export default LanguageSelector
