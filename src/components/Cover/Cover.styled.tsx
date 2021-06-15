import type { PageProps } from "../Page/Page"

import React from "react"
import styled from "@emotion/styled"

import { Container as Page } from "../Page/Page.styled"

export const Container = styled(
  (props: Omit<PageProps, "footer" | "footnote" | "number">) => (
    <Page {...props} />
  ),
)`
  columns: initial;
`

export const Image = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 0.5in;
  margin: 0.5in 0 0.5in;

  font-family: MrJeeves;
  font-weight: 800;
  color: #58180d;
`

export const Subtitle = styled.div`
  text-align: center;
  font-size: 0.35in;
  margin: 0.5in 0 0.5in;

  font-family: MrJeeves;
  font-weight: 800;
  color: #58180d;

  width: 80%;
  margin: 0 auto;
`

export const Author = styled.div`
  text-align: center;
  font-size: 0.25in;
  margin: 0.5in 0 0.5in;

  font-family: MrJeeves;
  font-weight: 800;
  color: #58180d;
`
