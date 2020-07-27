import PropTypes from 'prop-types'
import React from 'react'

import { Container, Image, Content, Title, Subtitle, Author } from './cover.styled'

/**
 * Use `Cover` to provide a cover page.
 */
export default function Cover({ title, subtitle, author, image, children, ...props }) {
  subtitle = subtitle && subtitle.split('\\n').map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={`${line}-${index}`}>
      {index > 0 && (<br />)}
      {line}
    </React.Fragment>
  ))

  return (
    <Container {...props}>
      {image && (<Image {...image} />)}
      <Content>
        {title && (<Title>{title}</Title>)}
        {subtitle && (<Subtitle>{subtitle}</Subtitle>)}
        {author && (<Author>Written by {author}</Author>)}
        {children}
      </Content>
    </Container>
  )
}

Cover.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
}
