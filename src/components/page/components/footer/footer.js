import PropTypes from 'prop-types'
import React from 'react'

import { Container, Footnote, PageNumber } from './footer.styled'

export default function Footer({ footnote, number, ...props }) {
  return (
    <Container {...props}>
      <Footnote>{footnote}</Footnote>
      <PageNumber>{number}</PageNumber>
    </Container>
  )
}

Footer.propTypes = {
  footnote: PropTypes.string,
  number: PropTypes.number,
}
