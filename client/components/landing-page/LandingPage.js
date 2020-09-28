import React from 'react'
import styled from 'styled-components'
import { Banner, AboutUs, Services } from '../landing-page'

const Wrapper = styled.div`

`

const LandingPage = () => (
  <Wrapper>
    <Banner />
    <AboutUs />
    <Services />
  </Wrapper>
)

export default LandingPage
