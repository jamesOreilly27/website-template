import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 32%;
  height: 50%;
  margin: 10px 0;
  background-color: #F8F8FF;
  border-radius: 4px;
  border-bottom: 6px solid #16609e;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px 0 20px 0;
`

const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #444;
  font-weight: 800;
  margin: 0;
`

const Blurb = styled.p`
  color: #444;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
`

const ServiceCard = ({ service }) => (
  <Wrapper>
    <Image src={`/assets/${service.image}`} />
    <Title> {service.title} </Title>
    <Blurb> {service.blurb} </Blurb>
  </Wrapper>
)

export default ServiceCard
