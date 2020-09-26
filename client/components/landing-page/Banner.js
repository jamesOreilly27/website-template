import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
`

const OrangeStrip = styled.div`
  width: 110%;
  height: 86px;
  border-top-right-radius: 45%;
  border-top-left-radius: 45%;
  background-image: linear-gradient(to right, #CA5721, #D27200);
  z-index: 1;

  &:before {
    width: 110%;
    height: 50px;
    position: absolute;
    content: '';
    background-color: #4787BA;
    border-top-right-radius: 90%;
    border-top-left-radius: 90%;
    top: 220px;
    z-index: 3;
  }

  &:after {
    width: 110%;
    height: 75px;
    border-top-right-radius: 25%;
    border-top-left-radius: 120%;
    content: '';
    position: absolute;
    top: 150px;
    background-image: linear-gradient(to top right, #CA5721, #DC8927);
    z-index: 4;
  }
`

// background-image: linear-gradient(to right, #4787BA, #2E71AA);

const ContentContainer = styled.div`
  width: 110%;
  height: 500px;
  position: absolute;
  top: 250px;
  background-image: linear-gradient(to bottom, #4787BA, #155C9A);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  overflow-x: hidden;
`

const BannerImage = styled.div`
  width: 43%;
  height: 75%;
  border: 2px dotted #FFF;
`

const Blurb = styled.div`
  width: 43%;
  height: 75%;
  border: 2px dotted #FFF;
`

const SVGContainer = styled.div`
  width: 110%;
`

const Bottom = styled(ReactSVG)`
  margin-top: 500px;
  overflow-x: hidden;
`

const Banner = () => (
  <Wrapper>
    <OrangeStrip />
      <ContentContainer>
        <BannerImage />
        <Blurb>

        </Blurb>
      </ContentContainer>
      <SVGContainer>
        <Bottom src="/assets/testing.svg" />
      </SVGContainer>
  </Wrapper>
)

export default Banner
