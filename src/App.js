import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FrontPage from './components/FrontPage'
import LandingMenu from './components/LandingMenu'
import LanguageSelector from './components/LanguageSelector'
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
        </Switch>
      </div>

    </Router>
  )
}

export default App
