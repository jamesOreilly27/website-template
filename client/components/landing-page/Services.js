import React from 'react'
import styled from 'styled-components'
import { ServiceCard } from '../landing-page'
import { ReactSVG } from 'react-svg'

const services = [
  { image: 'internal-tools.png', title: "Internal Software Tools", blurb: 'This is a blurb. Lets see if it works' },
  { image: 'web-development.png', title: "Website Development", blurb: 'This is a blurb. Lets see if it works' },
  { image: 'seo.png', title: "SEO Optomization", blurb: 'This is a blurb. Lets see if it works' },
  { image: 'email.png', title: "Email Marketing", blurb: 'This is a blurb. Lets see if it works' },
  { image: 'puzzle.png', title: "Brand Development", blurb: 'This is a blurb. Lets see if it works' },
  { image: 'social.png', title: "Social Media Management", blurb: 'This is a blurb. Lets see if it works' }
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SVGContainer = styled.div`
  width: 120%;
  margin-bottom: -5px;
`

const Top = styled(ReactSVG)`
  overflow-x: hidden;
`

const ContentContainer = styled.div`
  background-image: linear-gradient(to bottom, #CA5821, #D27200);
  border-bottom: 10px solid #16609e;
  width: 110%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h1`
  margin-bottom: 5px;
  color: #F8F8FF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 40px;
`

const Underline = styled.div`
  width: 7.5%;
  border-bottom: 1.5px solid #F8F8FF;
  margin-bottom: 25px;
`

const ServicesContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const Services = () => (
  <Wrapper>
    <SVGContainer>
      <Top src="/assets/orange-curve.svg"/>
    </SVGContainer>
    <ContentContainer>
      <Header> Services </Header>
      <Underline />
      <ServicesContainer>
        {services.map(service => <ServiceCard key={service.title} service={service} /> )}
      </ServicesContainer>
    </ContentContainer>
  </Wrapper>
)

export default Services
