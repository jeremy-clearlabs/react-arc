import React from 'react'
import { storiesOf } from '@storybook/react'
import { FeatureList } from 'components'

storiesOf('Organisms/FeatureList', module)
  .add('default', () => (
    <FeatureList />
  ))
