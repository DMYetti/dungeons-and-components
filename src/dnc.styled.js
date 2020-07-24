import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import fonts, { getFormat as getFontFormat } from './fonts';
import { BaseContainer as Page } from './components/page/page.styled';

export const globalStyles = css`
  body {
    margin: 0;
  }

  ${Object.entries(fonts).map(([ name, blocks ]) => blocks.map(({ files, bold, italic }) => `
    @font-face {
      font-family: ${name};
      src: ${files.map(file => `url('${file}') format('${getFontFormat(file)}')`).join(', ')};
      font-weight: ${bold ? 'bold' : 'normal'};
      font-style: ${italic ? 'italic' : 'normal'};
    }
  `).join(' ')).join(' ')}
`;

export function Globals() {
  return (
    <Global styles={globalStyles} />
  );
}

export const Container = styled.div`
  counter-reset: dnc-page-numbers;

  @media screen {
    background-color: #2C3E50;
    padding: 0.25in 0;

    > ${Page} {
      margin-right: auto;
      margin-left: auto;
      box-shadow: 0 0.05in 0.125in #000;
    }
    > ${Page} + ${Page} {
      margin-top: 0.25in;
    }
  }
`;
