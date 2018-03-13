import React from 'react'
import { storiesOf } from '@storybook/react'
import LogoCL from '.'

storiesOf('Atoms/LogoCL', module)
  .add('default', () => (
    <LogoCL width={200} />
  ))
