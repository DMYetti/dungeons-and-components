import styled from '@emotion/styled';
import { css } from '@emotion/core';

import background from './assets/background.jpg';

export const PageTitle = styled.h1`
  column-span: all;
  font-size: 0.4in;
  line-height: 1;
  clear: both;

  margin: 0;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180D;
`;

export const Heading1 = styled.h2`
  font-size: 0.3in;
  line-height: 1;
  clear: both;

  margin: 0.125in 0;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180D;

  &:first-child {
    margin-top: 0;
  }
`;

export const Heading2 = styled.h3`
  font-size: 0.25in;
  line-height: 1;
  border-bottom: 2px solid #c9ad6a;
  clear: both;

  margin: 0.125in 0;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180D;

  &:first-child {
    margin-top: 0;
  }
`;

export const Heading3 = styled.h4`
  font-size: 0.2in;
  line-height: 1;
  clear: both;

  margin: 0.125in 0;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180D;

  &:first-child {
    margin-top: 0;
  }
`;

export const ColumnBreak = styled.div`
  visibility: hidden;
  break-after: always;
  column-break-after: always;
`;

export const Container = styled.div`
  counter-increment: dnc-page-numbers;
  column-count: 2;
  column-fill: auto;
  column-gap: 0.5in;

  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  width: 8.5in;
  height: 11in;
  padding: 0.5in 0.5in 0.75in;

  font-family: BookSanity;
  font-size: 0.125in;
  line-height: 1.25;
  text-rendering: optimizeLegibility;
  -webkit-print-color-adjust: exact;

  background-color: #EEE5CE;
  background-image: url(${background});
  background-position: 50% 50%;

  // Special styles for use with stories
  ${({ story }) => story && css`
    height: auto;
    padding: 0.5in;
  `}
  ${({ story }) => story === 'half' && css`
    column-count: 1;
    width: 4.5in;
  `}

  p {
    margin: 0.125in 0;
  }

  // These are for use of content, not internal components

  > {
    ul, ol {
      margin: 0.125in 0;
      padding-left: 0.25in;

      ul, ol {
        margin: 0;
      }
    }

    p {
      & + p {
        text-indent: 1em;
      }

      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }

    ${PageTitle} + p:first-line {
      font-size: 115%;
      font-variant: small-caps;
    }

    ${PageTitle} + p:first-letter {
      float: left;
      font-family: Solberry;
      font-size: 1.4in;
      color: #222;
      line-height: 0.8em;
      font-variant: normal;
    }
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
    letter-spacing: 0.03em;
  }

  sup {
    vertical-align: super;
    font-size: smaller;
    line-height: 0;
  }

  sub {
    vertical-align: sub;
    font-size: smaller;
    line-height: 0;
  }
`;
