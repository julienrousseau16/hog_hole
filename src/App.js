import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FrontPage from './components/FrontPage'
import GameSession from './components/GameSession'
import LandingMenu from './components/LandingMenu'
import LanguageSelector from './components/LanguageSelector'
import NotFoundPage from './components/NotFoundPage'
import Rules from './components/Rules'
import Settings from './components/Settings'

import './App.css'

const App = () => {

  const [lang, setLang] = useState('fr')

  return (
    <Router>
      <div className="App">
        <LanguageSelector lang={lang} setLang={setLang}/>
        <Switch>
          <Route exact path='/'>
            <FrontPage lang={lang} />
          </Route>
          <Route path='/menu'>
            <LandingMenu lang={lang} />
          </Route>
          <Route path='/rules'>
            <Rules lang={lang} />
          </Route>
          <Route path='/settings'>
            <Settings lang={lang} />
          </Route>
          <Route path='/gamesession'>
            <GameSession lang={lang} />
          </Route>
          <Route path="*">
            <NotFoundPage lang={lang} />
          </Route>
        </Switch>
      </div>

    </Router>
  )
}

export default App
