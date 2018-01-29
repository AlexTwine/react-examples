import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import AttackC from './components/Attack/AttackC'
import SpaceDroidDestroyed from './components/SpaceDroidDestroyed/SpaceDroidDestroyed'
import registerServiceWorker from './registerServiceWorker'
import createStore from './state/createStore'
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const history = createBrowserHistory()
const store = createStore({ history })
const root = document.getElementById('root') as HTMLElement

const ConnectedApp = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/AttackC">Attack</Link>
            </li>
          </ul>
        </nav>

        <Route exact={true} path="/" component={App}/>

        <Route exact={true} path="/AttackC" component={AttackC}/>

        <Route exact={true} path="/SpaceDroidDestroyed" component={SpaceDroidDestroyed}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(ConnectedApp, root)

registerServiceWorker()
