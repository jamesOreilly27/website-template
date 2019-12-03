import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dance from './components/Dance'

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/dance' component={Dance} />
      </Switch>
    </Router>
    )
}

export default Main
