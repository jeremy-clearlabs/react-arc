import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export const authAction = suffix => ({ type, payload }) =>
  type === `AUTH_LOGIN_${suffix}` && payload

export function* loginAuthService(api, options = {}) {
  const request = options

  try {
    const data = yield call([api, api.post], '/login', request)
    console.log('data', data);
    yield put(actions.authLoginSuccess(data, request))
  } catch (e) {
    console.log('e', e);
    yield put(actions.authLoginFailure(e, request))
  }
}

export function* watchAuthLogin(api) {
  while (true) {
    const { payload, meta } = yield take(authAction('REQUEST'))
    yield call(loginAuthService, api, payload, meta)
  }
}

export default function* ({ api }) {
  yield fork(watchAuthLogin, api)
}
