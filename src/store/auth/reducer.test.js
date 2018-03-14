// https://github.com/diegohaz/arc/wiki/Reducers#unit-testing-reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { initialState } from './selectors';
import * as actions from './actions';
import reducer from './reducer';

const action = (type, payload, meta) => ({
  type,
  payload,
  meta: {
    meta
  }
});

const state = nextState => ({
  ...initialState,
  ...nextState
});

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

describe('AUTH_LOGIN_SUCCESS', () => {
  it('adds the user data to the initial state', () => {
    expect(reducer(
      initialState,
      action(actions.AUTH_LOGIN_SUCCESS, { token: 'abcdef' })
    )).toEqual(state({ user: { token: 'abcdef', isAuthenticated: true } }));
  });
});

describe('AUTH_LOGIN_FAILURE', () => {
  it('reports the error when the user failed to log in', () => {
    const error = new Error('Error');
    expect(reducer(
      initialState,
      action(actions.AUTH_LOGIN_FAILURE, error)
    )).toEqual(state({ auth: { errorMessage: 'Error: Error' } }))
  })
})

describe('AUTH_LOGOUT', () => {
  it('resets user and auth information on user logout', () => {
    expect(reducer(
      state({ user: { token: 'abcdef', isAuthenticated: true } }),
      action(actions.AUTH_LOGOUT)
    )).toEqual(initialState)
  })
})
