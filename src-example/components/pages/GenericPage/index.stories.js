import React from 'react'
import { storiesOf } from '@storybook/react'
import { GenericPage } from 'components'

storiesOf('Pages/GenericPage', module)
  .add('default', () => (
    <GenericPage />
  ))
