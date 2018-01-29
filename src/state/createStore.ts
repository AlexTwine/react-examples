import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import flows from '../flows'
import createSagaMiddleware from 'redux-saga'
import { History } from 'history'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

interface Props {
  history: History
  initialState?: {}
  enableLogger?: boolean
}

const createStore = ({ history, initialState = {}, enableLogger = true }: Props) => {
  const sagaMiddleware = createSagaMiddleware()
  const logger = createLogger()
  const noOp = (f: any) => f

  const finalCreateStore = composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware(history)), // Should be after saga in order to get put actions
    enableLogger ? applyMiddleware(logger) : noOp
  )(reduxCreateStore)

  const store = finalCreateStore(rootReducer, initialState)

  sagaMiddleware.run(flows)

  return store
}

export default createStore
