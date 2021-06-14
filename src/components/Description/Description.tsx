import React from "react"

import { Container } from "./Description.styled"

export interface DescriptionProps
  extends React.ComponentProps<typeof Container> {
  children: React.ReactNode
}

/**
 * Use `Description` to provide read-aloud text for your dungeon master.
 */
export default function Description({
  children,
  ...props
}: DescriptionProps): JSX.Element {
  return <Container {...props}>{children}</Container>
}
