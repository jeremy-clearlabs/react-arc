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
    <Alert type="primary">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('primary dismissable', () => (
    <Alert type="primary" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('secondary', () => (
    <Alert type="secondary">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('secondary dismissable', () => (
    <Alert type="secondary" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('danger', () => (
    <Alert type="danger">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('danger dismissable', () => (
    <Alert type="danger" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('alert', () => (
    <Alert type="alert">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('alert dismissable', () => (
    <Alert type="alert" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('success', () => (
    <Alert type="success">The quick brown fox jumps over the lazy dog.</Alert>
  ))
  .add('success dismissable', () => (
    <Alert type="success" dismissable>The quick brown fox jumps over the lazy dog.</Alert>
  ))
