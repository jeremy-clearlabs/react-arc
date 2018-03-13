// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import { initialState } from './selectors'
import { AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          // ...payload,
          token: payload.token,
          isAuthenticated: true
        },
        auth: initialState.auth,
      }
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        auth: {
          errorMessage: payload.toString()
        }
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        user: initialState.user,
        auth: initialState.auth,
      }
    default:
      return state
  }
}
