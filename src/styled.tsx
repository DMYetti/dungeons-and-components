import type { Mode } from "./components/Page/Page"

import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"

import fonts, { getFormat as getFontFormat } from "./fonts"
import { BaseContainer as Page } from "./components/Page/Page.styled"

export const globalStyles = css`
  body {
    margin: 0;
  }

  ${Object.entries(fonts)
    .map(([name, blocks]) =>
      blocks
        .map(
          ({ files, bold, italic }) => `
  @font-face {
    font-family: ${name};
    src: ${files
      .map((file) => `url('${file}') format('${getFontFormat(file)}')`)
      .join(", ")};
    font-weight: ${bold ? "bold" : "normal"};
    font-style: ${italic ? "italic" : "normal"};
  }
`,
        )
        .join(""),
    )
    .join("\n")}
`

export function Globals(): JSX.Element {
  return <Global styles={globalStyles} />
}

export const Container = styled.div<{
  mode: Mode
}>`
  counter-reset: dnc-page-numbers;

  @media screen {
    padding: 0.25in 0;

    ${({ mode }) => {
      if (mode === "default") {
        return `
          background-color: #132a38;
        `
      }
    }}

    > ${Page} {
      margin-right: auto;
      margin-left: auto;
      box-shadow: none;
    }

    > ${Page} + ${Page} {
      margin-top: 0.25in;
    }
  }
`
