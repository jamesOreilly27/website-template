import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  color: #0D4474;
  margin-bottom: 5px;
  font-size: 40px;
`

const Underline = styled.div`
  width: 10%;
  border-bottom: 1px solid #CA5820;
`

const Blurb = styled.p`
  width: 75%;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  color: #444;
`

const AboutUs = () => (
  <Wrapper>
    <Title> About Us </Title>
    <Underline />
    <Blurb>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Blurb>
  </Wrapper>
)

export default AboutUs
