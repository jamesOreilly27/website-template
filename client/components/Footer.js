import React from 'react'
import styled from 'styled-components'
import { links, info } from './helpers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BlueContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 110%;
  background-image: linear-gradient(to bottom, #4787BA, #0D4474);
  height: 100px;
  padding: 30px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 50px;
`

const Logo = styled.img`
  width: 150px;
  height: 100px;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const NavLink = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #F8F8FF;
  margin: 8px 0;
  font-size: 10px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Info = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #F8F8FF;
  margin: 8px 0;
  font-size: 10px;
`

const BlackLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100vw;
  height: 50px;
  background-color: black;
  color: #F8F8FF;
`

const Footer = () => (
  <Wrapper>
    <BlueContainer>
      <LogoContainer>
        <Logo src="/assets/logo-white.png" />
      </LogoContainer>
      <NavContainer>
        {links.map(link => (
          <NavLink>
            {link.name}
          </NavLink>
        ))}
      </NavContainer>
      <InfoContainer>
        {info.map(detail => (
          <Info>
            {detail}
          </Info>
        ))}
      </InfoContainer>
    </BlueContainer>
  </Wrapper>
)

export default Footer
