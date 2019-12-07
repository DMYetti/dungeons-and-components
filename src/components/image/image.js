import PropTypes from 'prop-types';
import React from 'react';

import { Container, Image as BaseImage } from './image.styled';

/**
 * Use `Image` to provide an image.
 */
export default function Image({ src, alt, children, ...props }) {
  return (
    <Container {...props}>
      <BaseImage src={src} alt={alt} />
      {children}
    </Container>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node,
};
