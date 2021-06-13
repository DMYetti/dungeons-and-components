import React from "react"

import { Container, Title } from "./Note.styled"

export default function Note({
  title,
  children,
  ...props
}: {
  title?: string
  children: React.ReactNode
} & React.ComponentProps<typeof Container>): JSX.Element {
  return (
    <Container {...props}>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  )
}
