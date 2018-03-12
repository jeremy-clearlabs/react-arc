// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginPage } from 'components'

storiesOf('Pages/LoginPage', module)
  .add('default', () => (
    <LoginPage />
  ))
