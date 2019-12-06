import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './image.styled';

/**
 * Use `Image` to provide an image.
 */
export default function Image({ src, alt, ...props }) {
  return (
    <Container src={src} alt={alt} {...props} />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
