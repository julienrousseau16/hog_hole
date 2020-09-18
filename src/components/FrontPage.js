import React from 'react'

import './FrontPage.css'

const FrontPage = () => {
  return (
    <div className='FrontPage'>
      <div className='FrontPage_container'>
        <h1 className='FrontPage_title'>Le Trou du Cochon</h1>
        <img className='FrontPage_logo' src={require('../pictures/hog.png')} alt='hog-logo' /> 
        <img className='grass' src={require('../pictures/grass.png')} alt='grass' />
      </div>
    </div>
  )
}

export default FrontPage
