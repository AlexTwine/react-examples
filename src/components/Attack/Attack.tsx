import * as React from 'react'

export interface AttackProps {
  attackSpaceDroid(): void,
}

const Attack = ({
  attackSpaceDroid,
}: AttackProps) => {
  return (
    <div className="Attack">
      <h1>Redirect Example</h1>

      <button type="button" onClick={attackSpaceDroid}>Use ultimate attack on space droid!</button>
    </div>
  )
}

export default Attack
