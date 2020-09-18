import React from 'react'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className='App_container'>
        <h1 className='App_title'>Le Trou du Cochon</h1>
        <img className='App_logo' src={require('./pictures/hog.png')} alt='hog-logo' />
        <img className='grass' src={require('./pictures/grass.png')} alt='grass' />
      </div>
    </div>
  )
}

export default App
