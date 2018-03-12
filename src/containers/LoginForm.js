import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { authLoginRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'
import { push } from 'react-router-redux'

import { fromAuth } from 'store/selectors'
import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch) => dispatch(authLoginRequest(data))

const validate = createValidator({
  username: [required],
  password: [required],
})

const mapStateToProps = state => ({
  user: fromAuth.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onAuthRedirect: () => dispatch(push('/dashboard'))
})

export default reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer))
