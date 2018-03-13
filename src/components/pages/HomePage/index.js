import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Heading, Button } from 'components'

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const HomePage = () => {
  return (
    <Wrapper>
      <Heading level={1}>Clear Labs</Heading>
      <Button to="/login">Login</Button>
    </Wrapper>
  )
}

export default HomePage
