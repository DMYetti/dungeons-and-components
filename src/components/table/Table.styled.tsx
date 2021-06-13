import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { withBreakable, withWide } from "../../helpers/styled"

import border from "./assets/border.png"

export const Container = styled.div<{
  bordered?: boolean
  breakable?: boolean
  wide?: boolean
}>`
  ${withBreakable}
  ${withWide}
  margin: 0.125in 0;

  ${({ bordered }) =>
    bordered &&
    css`
      margin-top: 0.375in;
      margin-top: calc(0.125in + 25px);
      margin-bottom: 0.375in;
      margin-bottom: calc(0.125in + 25px);
      background-color: white;

      border-style: solid;
      border-image-outset: 25px 17px;
      border-image-repeat: stretch;
      border-image-slice: 150 200 150 200;
      border-image-source: url(${border});
      border-image-width: 47px;
    `}
`

export const Title = styled.h2`
  font-size: 0.2in;
  line-height: 1;

  margin: 0 0 0.0625in 0;
  font-family: MrJeeves;
  font-weight: bold;
`

export const Table = styled.table`
  font-family: ScalySans;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`

export const Header = styled.thead``

export const Body = styled.tbody``

export const Footer = styled.tfoot``

export const Row = styled.tr`
  ${Body} &:nth-child(odd) {
    background-color: #e0e5c1;
  }
`

export const Cell = styled.td<{
  narrow?: boolean
  align?: "center" | "left" | "right" | "justify" | "char"
}>`
  padding: 0.03125in;
  vertical-align: top;
  text-align: ${({ align }) => align};

  ${({ narrow }) =>
    narrow &&
    css`
      width: 1px;
      white-space: nowrap;
    `}
`

Cell.defaultProps = {
  align: "left",
}

export const Heading = styled(Cell.withComponent("th"))`
  font-weight: bold;
  vertical-align: bottom;
`

Heading.defaultProps = Cell.defaultProps

export const Footing = styled(Cell.withComponent("th"))`
  font-weight: bold;
  vertical-align: top;
`

Footing.defaultProps = Cell.defaultProps
