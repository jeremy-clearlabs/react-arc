// https://github.com/diegohaz/arc/wiki/Redux-modules
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { isDev, isBrowser } from 'config'
import middlewares from './middlewares'
import reducer from './reducer'
import sagas from './sagas'

const devtools = isDev && isBrowser && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn

const configureStore = (initialState, services = {}, history) => {
  const sagaMiddleware = createSagaMiddleware()
  const routerHistoryMiddleware = routerMiddleware(history)

  const enhancers = [
    applyMiddleware(
      ...middlewares,
      sagaMiddleware,
      routerHistoryMiddleware,
    ),
    devtools(),
  ]

  const store = createStore(reducer, initialState, compose(...enhancers))
  let sagaTask = sagaMiddleware.run(sagas, services)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas, services)
      })
    })
  }

  return store
}

export default configureStore
