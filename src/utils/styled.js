import { css } from '@emotion/core';

export function withNoBreaks({ breakable }) {
  if (breakable) {
    return null;
  }

  return css`
    column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
  `;
}
