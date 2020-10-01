import React from 'react'
import styled from 'styled-components'
import { Banner, AboutUs, Services, ContactUs } from '../landing-page'

const Wrapper = styled.div`

`

const LandingPage = () => (
  <Wrapper id="test">
    <Banner />
    <AboutUs />
    <Services />
    <ContactUs />
  </Wrapper>
)

export default LandingPage
