import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FrontPage from './components/FrontPage'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path='/'>
            <FrontPage/>
          </Route>
        </Switch>
      </div>

    </Router>
  )
}

export default App
