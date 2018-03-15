import React from 'react'
import { mount, shallow } from 'enzyme'
import AuthTemplate from '.'

const wrap = (props = {}) => shallow(<AuthTemplate {...props}>test</AuthTemplate>)

it('mounts', () => {
  mount(<AuthTemplate>test</AuthTemplate>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})
