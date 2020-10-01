import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Footer } from './components'
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
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default Main
