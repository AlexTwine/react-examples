import { take, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import {
  ATTACK_SPACE_DROID,
} from '../../state/actionConstants'

const attackSpaceDroidF = function * () {
  while (1) {
    yield take([ATTACK_SPACE_DROID])

    const historyAction = push('/SpaceDroidDestroyed')

    yield put(historyAction)
  }
}

export default attackSpaceDroidF
