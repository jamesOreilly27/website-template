import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LandingPage, Navbar } from './components'

const Wrapper = styled.div`

`

const Main = () => {
  return (
      <Router>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
          </Switch>
        </Wrapper>
      </Router>
    )
}

export default Main
