import styled from "@emotion/styled"
import { withBreakable } from "../../helpers/styled"

import border from "./assets/border.png"

export const Container = styled.blockquote<{
  breakable?: boolean
}>`
  ${withBreakable}

  font-family: ScalySans;
  margin: 0.125in 0;
  border-style: solid;
  border-width: 0.125in;
  border-image: url(${border}) 24 fill stretch;
  border-image-outset: 0.03125in;
  box-shadow: 0 0 0.0625in #faf7ea;

  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }
`
