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

export default function Page({ story, footnote, number, children, ...props }) {
  return (
    <Container story={story} {...props}>
      {children}
      {!story && (
        <Footer footnote={footnote} number={number} />
      )}
    </Container>
  );
}

Page.propTypes = {
  story: PropTypes.oneOf([ 'half', 'full' ]),
  footnote: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
};
