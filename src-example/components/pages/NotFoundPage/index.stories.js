import React from 'react'
import { storiesOf } from '@storybook/react'
import { NotFoundPage } from 'components'

storiesOf('Pages/NotFoundPage', module)
  .add('default', () => (
    <NotFoundPage />
  ))
