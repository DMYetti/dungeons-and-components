import React from "react"
import { startCase } from "lodash"

import { Container, Title, Info } from "./MagicItem.styled"

export interface MagicItemProps extends React.ComponentProps<typeof Container> {
  title: string
  type: string
  rarity: string
  children: React.ReactNode
}

export default function MagicItem({
  title,
  type,
  rarity,
  children,
  ...props
}: MagicItemProps): JSX.Element {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Info>
        {startCase(type)}, {startCase(rarity)}
      </Info>
      {children}
    </Container>
  )
}
