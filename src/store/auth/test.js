// https://github.com/diegohaz/arc/wiki/Testing-redux-modules
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import delay from 'delay';
import reducer from './reducer';
import sagas from './sagas';
import { authLoginRequest } from './actions';
import { getUser } from './selectors';

const sagaMiddleware = createSagaMiddleware();

const api = {
  post: (path, data) => Promise.resolve(data),
  get: () => Promise.resolve([1, 2, 3]),
  put: (path, data) => Promise.resolve(data),
  delete: () => Promise.resolve()
};

const getStore = (initialState) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(sagas, { api });
  return store;
};

describe('auth', () => {
  test('authLoginRequest', async () => {
    const { getState, dispatch } = getStore();

    expect(getUser(getState())).toEqual(null);

    dispatch(authLoginRequest({ token: 'abcdf' }, 'foo'));
    await delay();
    expect(getUser(getState())).toEqual({
      isAuthenticated: true,
      token: 'abcdf'
    });
  });
});
