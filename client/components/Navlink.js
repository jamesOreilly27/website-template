import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #F8F8FF;
`

const Navlink = ({ name }) => (
  <Wrapper to={`${name}`}>
    {name}
  </Wrapper>
)

export default Navlink
