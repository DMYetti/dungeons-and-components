import type { DiceType } from "../../shared/helpers/dice"

import React from "react"

import { getDiceAverage } from "../../shared/helpers/dice"

import { Container } from "./Dice.styled"

export default function Dice({
  value,
  type,
}: {
  value: DiceType
  type?: string
} & React.ComponentProps<typeof Container>): JSX.Element {
  const average = getDiceAverage(value)

  return (
    <Container>
      {average} ({value}) {type}
    </Container>
  )
}
