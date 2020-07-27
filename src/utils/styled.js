import { css } from '@emotion/core'

export function withBreakable({ breakable = false }, extra = '') {
  if (breakable) {
    return null
  }

  return css`
    column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    ${extra}
  `
}

export function withWide({ wide = false }, extra = '') {
  if (!wide) {
    return null
  }

  return css`
    column-span: all;
    ${extra}
  `
}
