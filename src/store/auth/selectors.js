// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
export const initialState = {
  user: null,
  auth: {
    errorMessage: null
  }
}

export const getUser = (state = initialState) => state.user || initialState.user
export const getAuthError = (state = initialState) => state.auth.errorMessage
