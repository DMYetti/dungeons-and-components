import PropTypes from 'prop-types';
import React from 'react';

import Footer from './components/footer';

import { Container, Label, ColumnBreak } from './page.styled';

export { Label, ColumnBreak };

export default function Page({ footnote, number, children, ...props }) {
  return (
    <Container {...props}>
      {children}
      <Footer footnote={footnote} number={number} />
    </Container>
  );
}

Page.propTypes = {
  footnote: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
};
