// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import { fork, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const api = {
  post: () => {},
  get: () => {},
  put: () => {},
  delete: () => {},
}

test('authAction', () => {
  const action = suffix => ({ type: `AUTH_LOGIN_${suffix}`, payload: { foo: 'bar' } })
  expect(sagas.authAction('REQUEST')(action('REQUEST'))).toEqual({ foo: 'bar' })
})

describe('loginAuthService', () => {
  const request = { username: 'test', passowrd: 'test' }
  const meta = { foo: 'bar' }

  it('calls success', () => {
    const generator = sagas.loginAuthService(api, request, meta)
    expect(generator.next().value).toEqual(call([api, api.post], '/login', request))
    expect(generator.next({ foo: 'bar' }).value).toEqual(put(actions.authLoginSuccess({ foo: 'bar' }, meta)))
  })

  it('calls failure', () => {
    const generator = sagas.loginAuthService(api, request, meta)
    expect(generator.next().value).toEqual(call([api, api.post], '/login', request))
    expect(generator.throw('test').value)
      .toEqual(put(actions.authLoginFailure('test', meta)))
  })
})

test('watchAuthLogin', () => {
  const generator = sagas.watchAuthLogin(api)
  const payload = { foo: 'bar' }
  const meta = { service: 'auth' }
  generator.next()
  expect(generator.next({ payload, meta }).value).toEqual(call(sagas.loginAuthService, api, payload, meta))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value).toEqual(fork(sagas.watchAuthLogin, api))
})
