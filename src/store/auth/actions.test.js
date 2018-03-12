// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import * as actions from './actions'

test('authLoginRequest', () => {
  expect(actions.authLoginRequest('facebook'))
    .toEqual(expect.objectContaining({
      type: actions.AUTH_LOGIN_REQUEST,
      payload: {
        service: 'facebook',
      },
    }))
  expect(actions.authLoginRequest('facebook', { clientId: 'foo' }))
    .toEqual(expect.objectContaining({
      type: actions.AUTH_LOGIN_REQUEST,
      payload: {
        service: 'facebook',
        clientId: 'foo',
      },
    }))
})

test('authLoginSuccess', () => {
  expect(actions.authLoginSuccess(1, 'foo')).toEqual({
    type: actions.AUTH_LOGIN_SUCCESS,
    payload: 1,
    meta: {
      request: 'foo',
    },
  })
})

test('authLoginFailure', () => {
  expect(actions.authLoginFailure('test', 'foo')).toEqual({
    type: actions.AUTH_LOGIN_FAILURE,
    error: true,
    payload: 'test',
    meta: {
      request: 'foo',
    },
  })
})

test('authLogout', () => {
  expect(actions.authLogout()).toEqual({ type: actions.AUTH_LOGOUT })
})
