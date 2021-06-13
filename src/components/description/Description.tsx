import React from "react"

import { Container } from "./Description.styled"

/**
 * Use `Description` to provide read-aloud text for your dungeon master.
 */
export default function Description({
  children,
  ...props
}: {
  children: React.ReactNode
} & React.ComponentProps<typeof Container>): JSX.Element {
  return <Container {...props}>{children}</Container>
}
