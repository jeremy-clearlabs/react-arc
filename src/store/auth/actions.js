export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const authLoginRequest = (options = {}) => ({
  type: AUTH_LOGIN_REQUEST,
  payload: options,
  meta: {
    thunk: true
  },
})

export const authLoginSuccess = (user, meta) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: user,
  meta,
})

export const authLoginFailure = (error, meta) => ({
  type: AUTH_LOGIN_FAILURE,
  error: true,
  payload: error,
  meta,
})

export const authLogout = () => ({ type: AUTH_LOGOUT })
