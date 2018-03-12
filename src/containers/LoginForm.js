import React from 'react'
import { reduxForm } from 'redux-form'
import { resourceCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch) => {
  console.log('data', data);
  dispatch(resourceCreateRequest('posts', data))
}

// const validate = createValidator({
//   title: [required],
//   body: [required],
// })

export default reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  onSubmit,
  // validate,
})(LoginFormContainer)
