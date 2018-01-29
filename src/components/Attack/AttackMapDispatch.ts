import { Dispatch, Action } from 'redux'
import { AttackConnectProps } from './AttackC'
import { ATTACK_SPACE_DROID } from '../../state/actionConstants'

export interface AttackMapDispatchReturnType {
  attackSpaceDroid(): void;
}

const AttackMapDispatch = (
  dispatch: Dispatch<Action>,
  props: AttackConnectProps,
): AttackMapDispatchReturnType => {
  return {
    attackSpaceDroid: () => {
      dispatch({
        type: ATTACK_SPACE_DROID,
      })
    }
  }
}

export default AttackMapDispatch
