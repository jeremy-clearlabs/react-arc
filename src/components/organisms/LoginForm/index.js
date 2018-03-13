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

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onAuthRedirect: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    user: PropTypes.object,
    errorMessage: PropTypes.string
  }

  static defaultProps = {
    handleSubmit: () => {}
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      this.props.onAuthRedirect()
    }
  }

  render() {
    const { handleSubmit, loading, failed, errorMessage } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Heading level={2}>Login</Heading>
        {failed ? (
          <div>{errorMessage}</div>
        ) : null}
        <Field name="username" label="Username" type="text" component={ReduxField} />
        <Field name="password" label="Password" type="password" component={ReduxField} />
        <Button type="submit" disable={loading}>Login</Button>
      </Form>
    )
  }
}

export default LoginForm
