import type { SerializedStyles } from "@emotion/react"
import { css } from "@emotion/react"

export function withBreakable(
  { breakable = false }: { breakable?: boolean },
  extra = "",
): SerializedStyles | null {
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

export function withWide(
  { wide = false }: { wide?: boolean },
  extra?: SerializedStyles,
): SerializedStyles | null {
  if (!wide) {
    return null
  }

  return css`
    column-span: all;
    ${extra}
  `
}
