import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Heading } from 'components'

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const HomePage = () => {
  return (
    <Wrapper>
      <Heading level={1}>Clear Labs</Heading>
      <Link to="/login">Login</Link>
    </Wrapper>
  )
}

export default HomePage
