import React from 'react'
import { shallow } from 'enzyme'
import LogoCL from '.'

const wrap = (props = {}) => shallow(<LogoCL {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
