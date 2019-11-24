import styled from '@emotion/styled';

import background from './assets/background.jpg';

export const Container = styled.div`
  counter-increment: phb-page-numbers;
  column-count: 2;
  column-fill: auto;
  column-gap: 1cm;
  column-width: 8cm;

  position: relative;
  z-index: 15;
  box-sizing: border-box;
  overflow: hidden;
  width: 215.9mm;
  height: 279.4mm;
  padding: 1.0cm 1.7cm;
  padding-bottom: 1.5cm;
  background-color: #EEE5CE;
  background-image: url(${background});
  font-family: BookSanity;
  font-size: 0.317cm;
  text-rendering: optimizeLegibility;
  page-break-before: always;
  page-break-after: always;

  &, & * {
    -webkit-print-color-adjust: exact;
  }

  h1 {
    column-span: all;
    font-size: 0.987cm;

    margin-top: 0.2em;
    margin-bottom: 0.2em;
    font-family: MrJeeves;
    font-weight: 800;
    color: #58180D;
  }

  h2 {
    font-size: 0.705cm;

    margin-top: 0.2em;
    margin-bottom: 0.2em;
    font-family: MrJeeves;
    font-weight: 800;
    color: #58180D;
  }

  h3 {
    font-size: 0.529cm;
    border-bottom: 2px solid #c9ad6a;

    margin-top: 0.2em;
    margin-bottom: 0.2em;
    font-family: MrJeeves;
    font-weight: 800;
    color: #58180D;
  }

  h4 {
    margin-bottom: 0.00em;
    font-size: 0.458cm;

    margin-top: 0.2em;
    margin-bottom: 0.2em;
    font-family: MrJeeves;
    font-weight: 800;
    color: #58180D;
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

  ul, ol {
    margin-bottom: 0.8em;
    padding-left: 1.4em;
    line-height: 1.3em;
    list-style-position: outside;

    li {
      column-break-inside: avoid;
      page-break-inside: avoid;
      break-inside: avoid;
    }
  }

  ul ul, ol ol, ul ol, ol ul {
    margin-bottom: 0;
    margin-left: 1.5em;
  }

  p {
    line-height: 1.3em;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  p + p, ul + p, ol + p {
    text-indent: 1em;
  }

  h1 + p:first-line {
    font-variant: small-caps;
  }

  h1 + p:first-letter {
    float: left;
    font-family: Solberry;
    font-size: 10em;
    color: #222;
    line-height: 0.8em;
    font-variant: normal;
  }
`;

// Generic

export const Label = styled.strong`
`;

export const ColumnBreak = styled.div`
  visibility: hidden;
  break-after: always;
  column-break-after: always;
`;
