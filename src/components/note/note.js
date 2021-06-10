import React from 'react'

import { Container, Title } from './note.styled'

export default function Note({ title, children, ...props }) {
  return (
    <Container {...props}>
      {title && (
        <Title>{title}</Title>
      )}
      {children}
    </Container>
  )
}

Note.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
