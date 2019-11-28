import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './description.styled';

/**
 * Use `Description` to provide read-aloud text for your dungeon master.
 */
export default function Description({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

Description.propTypes = {
  children: PropTypes.node,
};
