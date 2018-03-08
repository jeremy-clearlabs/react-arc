import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hero } from 'components'

storiesOf('Organisms/Hero', module)
  .add('default', () => (
    <Hero />
  ))
