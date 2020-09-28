import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`

const Input = styled.input`
  width: 95%;
  margin: 5px 0;
`

const HalfInput = styled(Input)`
  width: 45%;
`

const ContactForm = () => (
  <Wrapper>
    <Row>
      <HalfInput name="first" placeholder="First Name"></HalfInput>
      <HalfInput name="last" placeholder="Last Name"></HalfInput>
    </Row>
    <Input name="phone" placeholder="Phone Number" />
    <Input name="email" placeholder="Email" />
  </Wrapper>
)

export default ContactForm
