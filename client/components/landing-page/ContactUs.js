import React from 'react'
import styled from 'styled-components'
import { ContactForm } from '../landing-page'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  margin-top: 50px;
`

const Title = styled.h1`
  font-size: 40px;
  font-family: 'Montserrat', sans serif;
  color: #0D4474;
  margin: 0;
  margin-bottom: 5px;
`

const Underline = styled.div`
  width: 8%;
  border-bottom: 1px solid #CA5820;
`

const ContactUs = () => (
  <Wrapper>
    <Title> Contact Us</Title>
    <Underline />
    <ContactForm />
  </Wrapper>
)

export default ContactUs
