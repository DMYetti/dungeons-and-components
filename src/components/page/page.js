import PropTypes from 'prop-types';
import React from 'react';

import { useLink } from '../link/link';

import Footer from './components/footer/footer';

import {
  Container,
  PageTitle as PageTitleBase,
  Heading1 as Heading1Base,
  Heading2 as Heading2Base,
  Heading3 as Heading3Base,
  ColumnBreak,
} from './page.styled';

export {
  ColumnBreak,
};

export default function Page({ story, footer, footnote, number, children, ...props }) {
  return (
    <Container story={story} {...props}>
      {children}
      {footer && !story && (
        <Footer footnote={footnote} number={number} />
      )}
    </Container>
  );
}

Page.defaultProps = {
  footer: true,
}

Page.propTypes = {
  story: PropTypes.oneOf([ 'half', 'full' ]),
  footer: PropTypes.bool.isRequired,
  footnote: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
};

const titlePropTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export function PageTitle({ name, children, ...props }) {
  const ref = useLink(name || children);

  return (
    <PageTitleBase {...props} name={name} ref={ref}>
      {children}
    </PageTitleBase>
  );
}

PageTitle.propTypes = { ...titlePropTypes };

export function Heading1({ name, children, ...props }) {
  const ref = useLink(name || children);

  return (
    <Heading1Base {...props} name={name} ref={ref}>
      {children}
    </Heading1Base>
  );
}

Heading1.propTypes = { ...titlePropTypes };

export function Heading2({ name, children, ...props }) {
  const ref = useLink(name || children);

  return (
    <Heading2Base {...props} name={name} ref={ref}>
      {children}
    </Heading2Base>
  );
}

Heading2.propTypes = { ...titlePropTypes };

export function Heading3({ name, children, ...props }) {
  const ref = useLink(name || children);

  return (
    <Heading3Base {...props} name={name} ref={ref}>
      {children}
    </Heading3Base>
  );
}

Heading3.propTypes = { ...titlePropTypes };
