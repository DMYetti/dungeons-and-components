import styled from "@emotion/styled"
import { withBreakable } from "../../helpers/styled"

export const Container = styled.div<{
  breakable?: boolean
}>`
  ${withBreakable}

  border: 1px solid #58180D;
  padding: 0.125in;
  margin: 0 0 0.125in;

  > :last-child {
    margin-bottom: 0;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 0.125in;
`
