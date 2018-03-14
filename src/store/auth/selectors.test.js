// https://github.com/diegohaz/arc/wiki/Selectors#unit-testing-selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import * as selectors from './selectors'

const altState = {
  user: {
    token: 'abcdefg',
    isAuthenticated: true
  },
  auth: {
    errorMessage: null
  }
}

test('initialState', () => {
  expect(selectors.initialState).toEqual({ user: null, auth: { errorMessage: null } })
})

test('getUser', () => {
  expect(selectors.getUser()).toBe(selectors.initialState.user)
  expect(selectors.getUser(undefined)).toBe(selectors.initialState.user)
  expect(selectors.getUser(altState)).toBe(altState.user)
})

test('getAuthError', () => {
  expect(selectors.getAuthError()).toBe(selectors.initialState.auth.errorMessage)
  expect(selectors.getAuthError(undefined)).toBe(selectors.initialState.auth.errorMessage)
  expect(selectors.getAuthError(altState)).toBe(altState.auth.errorMessage)
})

