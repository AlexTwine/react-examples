import * as React from 'react'
import { connect } from 'react-redux'
import Attack from './Attack'
import AttackMapState, { AttackMapStateReturnType } from './AttackMapState'
import AttackMapDispatch, { AttackMapDispatchReturnType } from './AttackMapDispatch'

export interface AttackConnectProps {
}

interface Props extends
  AttackMapStateReturnType,
  AttackMapDispatchReturnType,
  AttackConnectProps {}

class AttackC extends React.Component<Props, {}> {
  render () {
    return React.createElement(Attack, this.props)
  }
}

export default connect<
  AttackMapStateReturnType,
  AttackMapDispatchReturnType,
  AttackConnectProps>(AttackMapState, AttackMapDispatch)(AttackC)
