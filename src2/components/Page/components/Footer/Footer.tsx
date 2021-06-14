import React from "react"

import { Container, Footnote, PageNumber } from "./Footer.styled"

export default function Footer({
  footnote,
  number,
  ...props
}: {
  footnote?: string
  number?: number
} & React.ComponentProps<typeof Container>): JSX.Element {
  return (
    <Container {...props}>
      {footnote && <Footnote>{footnote}</Footnote>}
      {number && <PageNumber>{number}</PageNumber>}
    </Container>
  )
}
