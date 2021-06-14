import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { withWide } from "../../helpers/styled"

export const Container = styled.div<{
  wide?: boolean
}>`
  column-gap: 0.25in;
  column-count: 2;

  ${(props) =>
    withWide(
      props,
      css`
        column-count: 4;
      `,
    )}
`

export const Title = styled.h2`
  font-size: 0.25in;
  line-height: 1;
  border-bottom: 2px solid #c9ad6a;

  margin: 0.125in 0;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180d;

  &:first-child {
    margin-top: 0;
  }
`

export const Level = styled.div``

export const LevelTitle = styled.h3`
  font-size: 0.2in;
  line-height: 1;

  margin: 0.125in 0;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180d;

  &:first-child {
    margin-top: 0;
  }
`

export const Spells = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0.0625in;
`

export const Spell = styled.li``
