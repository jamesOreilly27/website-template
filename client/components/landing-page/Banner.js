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

const ContentContainer = styled.div`
  width: 110%;
  height: 530px;
  position: absolute;
  top: 250px;
  background-image: linear-gradient(to bottom, #4787BA, #0D4474);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  overflow-x: hidden;
`

const BannerImageContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 90%;
  height: 500px;
`

const Blurb = styled.div`
  width: 35%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BannerHeader = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  color: #F8F8FF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
`

const Underline = styled.div`
  width: 60%;
  border-bottom: 1px solid #CA5820;
`

const BannerText = styled.p`
  margin-top: 45px;
  font-family: 'Lato', sans-serif;
  width: 95%;
  color: #F8F8FF;
  font-size: 20px;
`

const Button = styled.button`
  width: 35%;
  margin-top: 35px;
  height: 50px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #CA5721, #DC8927);
  border: none;
  color: #F8F8FF;
`

const SVGContainer = styled.div`
  width: 110%;
`

const Bottom = styled(ReactSVG)`
  margin-top: 533px;
  overflow-x: hidden;
`

const Banner = () => (
  <Wrapper>
    <OrangeStrip />
      <ContentContainer>
        <BannerImageContainer>
          <Image src="/assets/efficiency.png" />
        </BannerImageContainer>
        <Blurb>
          <BannerHeader>
            SERVING SOLUTIONS
          </BannerHeader>
          <Underline />
          <BannerText>
            This is a paragraph. Let's see how it looks and maybe think a tiny bit about hat it should say later. Cheers.
          </BannerText>
          <Button>
            Read More
          </Button>
        </Blurb>
      </ContentContainer>
      <SVGContainer>
        <Bottom src="/assets/testing.svg" />
      </SVGContainer>
  </Wrapper>
)

export default Banner
