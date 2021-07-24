import React from "react"

import { useLink } from "../Link/Link"

import Footer from "./components/Footer/Footer"

import {
  Container,
  ColumnBreak as ColumnBreakBase,
  Heading1 as Heading1Base,
  Heading2 as Heading2Base,
  Heading3 as Heading3Base,
  PageTitle as PageTitleBase,
} from "./Page.styled"

export * from "./services/Page/Page"

export interface PageProps extends React.ComponentProps<typeof Container> {
  footer?: boolean
  footnote?: string
  number?: number
  children: React.ReactNode
}

export default function Page({
  story,
  footer = true,
  footnote,
  number,
  children,
  ...props
}: PageProps): JSX.Element {
  return (
    <Container story={story} {...props} data-page={footer}>
      {children}
      {footer && !story && <Footer footnote={footnote} number={number} />}
    </Container>
  )
}

export function ColumnBreak({
  ...props
}: React.ComponentProps<typeof ColumnBreakBase>): JSX.Element {
  return <ColumnBreakBase {...props} />
}

interface TitlePropTypes {
  name?: string
  children: string
}

export function PageTitle({
  name,
  children,
  ...props
}: TitlePropTypes & React.ComponentProps<typeof PageTitleBase>): JSX.Element {
  const ref = useLink(name || children, name || children)

  return (
    <PageTitleBase {...props} title={name} ref={ref}>
      {children}
    </PageTitleBase>
  )
}

export function Heading1({
  name,
  children,
  ...props
}: TitlePropTypes & React.ComponentProps<typeof Heading1Base>): JSX.Element {
  const ref = useLink(name || children, name || children)

  return (
    <Heading1Base {...props} title={name} ref={ref}>
      {children}
    </Heading1Base>
  )
}

export function Heading2({
  name,
  children,
  ...props
}: TitlePropTypes & React.ComponentProps<typeof Heading2Base>): JSX.Element {
  const ref = useLink(name || children, name || children)

  return (
    <Heading2Base {...props} title={name} ref={ref}>
      {children}
    </Heading2Base>
  )
}

export function Heading3({
  name,
  children,
  ...props
}: TitlePropTypes & React.ComponentProps<typeof Heading3Base>): JSX.Element {
  const ref = useLink(name || children, name || children)

  return (
    <Heading3Base {...props} title={name} ref={ref}>
      {children}
    </Heading3Base>
  )
}
