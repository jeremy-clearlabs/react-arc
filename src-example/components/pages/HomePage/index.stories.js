// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { HomePage } from 'components'

storiesOf('Pages/HomePage', module)
  .add('default', () => (
    <HomePage />
  ))
