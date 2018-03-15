import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {LogoCL} from 'components'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Content = styled.section`
  width: 28rem;
  border: 1px solid ${palette('grayscale', 5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`

const AuthTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>
        <LogoCL width={200} />
        {children}
      </Content>
    </Wrapper>
  )
}

AuthTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default AuthTemplate
