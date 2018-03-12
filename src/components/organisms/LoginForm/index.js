import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Button, ReduxField, Heading } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const LoginForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>Login</Heading>
      <Field name="username" placeholder="Username" type="text" component={ReduxField} />
      <Field name="password" placeholder="Password" type="password" component={ReduxField} />
      <Button type="submit" disable={submitting}>Login</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
}

LoginForm.defaultProps = {
  handleSubmit: () => {}
}

export default LoginForm
