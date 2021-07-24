import React from "react"

import { Container, Footnote, PageNumber } from "./Footer.styled"

export interface FooterProps extends React.ComponentProps<typeof Container> {
  footnote?: string
  number?: number
}

export default function Footer({
  footnote,
  number,
  ...props
}: FooterProps): JSX.Element {
  return (
    <Container {...props}>
      {footnote && <Footnote>{footnote}</Footnote>}
      <PageNumber data-page-number>{number}</PageNumber>
    </Container>
  )
}
