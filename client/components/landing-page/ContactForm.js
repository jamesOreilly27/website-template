import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const InputsContainer = styled.div`
  
`

const LeftFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110%;
`

const Input = styled.input`
  width: 107%;
  margin: 5px 0;
  padding: 5px;
  font-family: Montserrat, sans-serif;
  border: none;
  background-color: #CCE0EF;
  border-radius: 4px;
`

const HalfInput = styled(Input)`
  width: 45%;
  padding: 5px;
  font-family: Montserrat, sans-serif;
  border: none;
  border-radius: 4px;
  background-color: #CCE0EF;
`

const RightFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49%;
`

const TextArea = styled.textarea`
  background-color: #CCE0EF;
  width: 100%;
  height: 90%;
  border: none;
  border-radius: 4px;
  resize: none;
  margin-top: 3px;
  font-family: Montserrat, sans-serif;
`

const ContactForm = () => (
  <Wrapper>
    <LeftFields>
      <Row>
        <HalfInput name="first" placeholder="First Name"></HalfInput>
        <HalfInput name="last" placeholder="Last Name"></HalfInput>
      </Row>
      <Input name="phone" placeholder="Phone Number" />
      <Input name="email" placeholder="Email" />
    </LeftFields>
    <RightFields>
      <TextArea name="details" placeholder="Tell us about your project..." />
    </RightFields>
  </Wrapper>
)

export default ContactForm
