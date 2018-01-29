import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const appReducer = combineReducers({
  router: routerReducer,
})

type Action = {
  type: string,
}

const rootReducer = (state: {}, action: Action) => {
  return appReducer(state, action)
}

export default rootReducer
