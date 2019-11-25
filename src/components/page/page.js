import PropTypes from 'prop-types';
import React from 'react';

import Footer from './components/footer/footer';

import {
  Container,
  PageTitle,
  Heading1,
  Heading2,
  Heading3,
  ColumnBreak,
} from './page.styled';

export {
  PageTitle,
  Heading1,
  Heading2,
  Heading3,
  ColumnBreak,
};

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
