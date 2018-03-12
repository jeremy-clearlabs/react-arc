import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { LoginForm } from 'components'

storiesOf('Organisms/LoginForm', module)
  .add('default', () => (
    <LoginForm
      onFacebookLogin={action('facebook')}
      onGoogleLogin={action('google')}
      onClose={action('closed')}
      isOpen
    />
  ))
