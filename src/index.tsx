import React from "react"

import { LinkProvider } from "./components/link/link"
import { Globals, Container } from "./styled"

export {
  default as Page,
  PageTitle,
  Heading1,
  Heading2,
  Heading3,
  ColumnBreak,
} from "./components/page/page"

export { default as Description } from "./components/description/description"
export { default as Note } from "./components/note/note"
export { default as Table } from "./components/table/table"
export { default as ClassTable } from "./components/class-table/class-table"
export { default as TableOfContents } from "./components/table-of-contents/table-of-contents"
export { default as Spell } from "./components/spell/spell"
export { default as SpellList } from "./components/spell-list/spell-list"
export { default as Image } from "./components/image/image"
export { default as Cover } from "./components/cover/cover"
export { default as Legalese } from "./components/legalese/legalese"
export { default as StatBlock } from "./components/stat-block/stat-block"

export { Container } from "./styled"

export default function DungeonsAndComponents({
  children,
  ...props
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <LinkProvider>
      <Globals />
      <Container {...props}>{children}</Container>
    </LinkProvider>
  )
}
