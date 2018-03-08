import React from 'react'
import { storiesOf } from '@storybook/react'
import Badge from '.'

storiesOf('Atoms/Badge', module)
  .add('default', () => (
    <Badge>Hello</Badge>
  ))
  .add('reverse', () => (
    <Badge reverse>Hello</Badge>
  ))
  .add('another palette', () => (
    <Badge palette="secondary">Hello</Badge>
  ))
