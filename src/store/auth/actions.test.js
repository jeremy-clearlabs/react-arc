// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import * as actions from './actions'

test('authLoginRequest', () => {
  expect(actions.authLoginRequest({ username: 'test', password: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.AUTH_LOGIN_REQUEST,
      payload: {
        username: 'test',
        password: 'test'
      },
    }))
})

test('authLoginSuccess', () => {
  expect(actions.authLoginSuccess({ token: 'abcdf' }, 'foo')).toEqual({
    type: actions.AUTH_LOGIN_SUCCESS,
    payload: { token: 'abcdf' },
    meta: 'foo',
  })
})

test('authLoginFailure', () => {
  const error = new Error('error');
  expect(actions.authLoginFailure(error, 'foo')).toEqual({
    type: actions.AUTH_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: 'foo'
  })
})

test('authLogout', () => {
  expect(actions.authLogout()).toEqual({ type: actions.AUTH_LOGOUT })
})
