import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../components'
import { links } from './helpers'

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const Logo = styled.img`
  width: 125px;
  height: 75px;
`

const Orange = styled.div`
  width: 3.5vw;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-image: linear-gradient(to top, #CA5721, #DC8927);

  &:before {
    width: 2.5vw;
    height: 100px;
    position: absolute;
    content: '';
    background-color: #FFF;
    border-radius: 0 150px 150px 0 / 0 300px 300px 0;
  }

  &:after {
    width: 2.5vw;
    height: 100px;
    position: absolute;
    content: '';
    background-image: linear-gradient(to top, #CA5721, #DC8927);
    border-radius: 0 50% 50% 0 / 0 50% 50% 0;
    left: 163px;
  }
`

const BlueContainer = styled.div`
  width: 85%;
  height: 100%;
  background-image: linear-gradient(to top, #155C9A, #4787BA);
  display: flex;
  justify-content: flex-end;
`

const LinksContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Navbar = () => (
  <Wrapper>
    <LogoContainer>
      <Logo src="/assets/Smart-Software-Solutions-LLC.jpg" />
    </LogoContainer>
    <Orange> </Orange>
    <BlueContainer>
      <LinksContainer>
        {links.map(link => <Navlink key={link.name} link={link} /> )}
      </LinksContainer>
    </BlueContainer>
  </Wrapper>
)

export default Navbar
