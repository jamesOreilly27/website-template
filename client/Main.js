import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Test } from './components'
import { LandingPage } from './components/landing-page'

const Wrapper = styled.div`

`

const Main = () => {
  return (
      <Router>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/test' component={Test} />
          </Switch>
        </Wrapper>
      </Router>
    )
}

export default Main
