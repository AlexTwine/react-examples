import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import createStore from './state/createStore'
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'

const history = createBrowserHistory()
const store = createStore({ history })
const root = document.getElementById('root') as HTMLElement

const ConnectedApp = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(ConnectedApp, root)

registerServiceWorker()
