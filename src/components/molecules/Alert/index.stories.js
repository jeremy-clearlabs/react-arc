import React from 'react'
import { storiesOf } from '@storybook/react'
import { Alert } from 'components'

storiesOf('Molecules/Alert', module)
  .add('default', () => (
    <Alert>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('default dismissable', () => (
    <Alert dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('primary', () => (
    <Alert variant="primary">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('primary dismissable', () => (
    <Alert variant="primary" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('secondary', () => (
    <Alert variant="secondary">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('secondary dismissable', () => (
    <Alert variant="secondary" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('danger', () => (
    <Alert variant="danger">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('danger dismissable', () => (
    <Alert variant="danger" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('alert', () => (
    <Alert variant="alert">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('alert dismissable', () => (
    <Alert variant="alert" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('success', () => (
    <Alert variant="success">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('success dismissable', () => (
    <Alert variant="success" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
