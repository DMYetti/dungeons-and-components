import React from "react"

import { Container, Title } from "./Note.styled"

export interface NoteProps extends React.ComponentProps<typeof Container> {
  title?: string
  children: React.ReactNode
}

export default function Note({
  title,
  children,
  ...props
}: NoteProps): JSX.Element {
  return (
    <Container {...props}>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  )
}
