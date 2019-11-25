import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './description.styled';

export default function Informtion({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

Informtion.propTypes = {
  children: PropTypes.node,
};
