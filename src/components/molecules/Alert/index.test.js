import React from 'react'
import { mount, shallow } from 'enzyme'
import Alert from '.'

const onClose = jest.fn()

const wrap = (props = {}) => shallow(<Alert onClose={onClose} {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders variant', () => {
  const wrapper = wrap({ variant: 'primary' })
  expect(wrapper.find({ variant: 'primary' })).toHaveLength(1)
})

it('renders block within Child', () => {
  const wrapper = wrap()
  expect(wrapper.children()).toHaveLength(1)
})

it('does not render the close icon when not passed dismissable', () => {
  const wrapper = wrap()
  expect(wrapper.find('IconButton')).toHaveLength(0)
})

it('renders close icon when passed dismissable', () => {
  const wrapper = wrap({ dismissable: true })
  expect(wrapper.find('IconButton')).toHaveLength(1)
})

it('renders nothing when close icon is clicked', () => {
  const wrapper = wrap({ dismissable: true })
  const close = wrapper.find('IconButton')
  expect(wrapper.state('isOpen')).toBe(true)
  close.simulate('click')
  expect(wrapper.state('isOpen')).toBe(false)
})

it('mounts with different combination of props', () => {
  mount(<Alert dismissable />)
  // mount(<Alert dismissable />)
  // mount(<Alert dismissable />)
})
