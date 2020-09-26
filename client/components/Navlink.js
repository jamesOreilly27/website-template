import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const nameToUrl = name => {
  let url = ''
  const words = name.split(' ')
  if(words.length > 1) {
    words.forEach(word => url += word)
  } else {
    url = name
  }
  return url.toLowerCase()
}

const Wrapper = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #F8F8FF;
`

const Navlink = ({ name }) => (
  <Wrapper to={`${nameToUrl(name)}`}>
    {name}
  </Wrapper>
)

export default Navlink
