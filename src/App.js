import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FrontPage from './components/FrontPage'
import LandingMenu from './components/LandingMenu'
import LanguageSelector from './components/LanguageSelector'

import './App.css'

const App = () => {

  const [lang, setLang] = useState('fr')

  return (
    <Router>
      <div className="App">
        <LanguageSelector setLang={setLang}/>
        <Switch>
          <Route exact path='/'>
            <FrontPage lang={lang} />
          </Route>
          <Route path='/menu'>
            <LandingMenu lang={lang} />
          </Route>
        </Switch>
      </div>

    </Router>
  )
}

export default App
