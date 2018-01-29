import { fork } from 'redux-saga/effects'
import attackSpaceDroidF from './redirects/attackSpaceDroidF'

const flows = function * root () {
  yield [
    fork(attackSpaceDroidF),
  ]
}

export default flows
