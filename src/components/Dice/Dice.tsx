import type { DiceType } from "../../helpers/dice"

import React from "react"

import { getDiceAverage } from "../../helpers/dice"

import { Container } from "./Dice.styled"

export interface DiceProps extends React.ComponentProps<typeof Container> {
  value: DiceType
  type?: string
}

export default function Dice({ value, type }: DiceProps): JSX.Element {
  const average = getDiceAverage(value)

  return (
    <Container>
      {average} ({value}) {type}
    </Container>
  )
}
