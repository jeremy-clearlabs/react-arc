import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '.'

const handleSubmit = jest.fn()
const onAuthRedirect = jest.fn()

const wrap = (props = {}) => shallow(<LoginForm onAuthRedirect={onAuthRedirect} handleSubmit={handleSubmit} {...props} />)

it('calls renderSubmit when submitted', () => {
  handleSubmit.mockClear()
  const wrapper = wrap()
  expect(handleSubmit).not.toBeCalled()
  wrapper.simulate('submit')
  expect(handleSubmit).toBeCalled()
})

it('disables button while loading', () => {
  const wrapper = wrap()
  expect(wrapper.find({ disabled: true }).length).toBe(0)
  wrapper.setProps({ loading: true })
  expect(wrapper.find({ disabled: true })).toHaveLength(1)
})
