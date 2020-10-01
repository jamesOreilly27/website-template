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

const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #F8F8FF;
  cursor: pointer;
`

const Navlink = ({ link }) => (
  <Wrapper onClick={() => {
    window.scroll(0, link.scrollY)
  }}>
    {link.name}
  </Wrapper>
)

export default Navlink
