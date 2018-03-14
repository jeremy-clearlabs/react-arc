import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { reduxForm } from 'redux-form'
import { LoginForm } from 'components'
import { createValidator, required } from 'services/validation'

const validate = createValidator({
  username: [required],
  password: [required],
})
const LoginFormContainer = reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false
})(LoginForm)
const LoginFormContainerWithValidations = reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  validate
})(LoginForm)

storiesOf('Organisms/LoginForm', module)
  .add('default', () => (
    <LoginFormContainer
      handleSubmit={action('submit')}
      onAuthRedirect={action('authRedirect')}
    />
  ))
  .add('with validations', () => (
    <LoginFormContainerWithValidations
      handleSubmit={action('submit')}
      onAuthRedirect={action('authRedirect')}
    />
  ))
