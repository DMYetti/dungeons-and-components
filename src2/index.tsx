import React from "react"

import { LinkProvider } from "./components/Link/Link"
import { Globals, Container } from "./styled"

export { default as ClassTable } from "./components/ClassTable/ClassTable"
export { default as Cover } from "./components/Cover/Cover"
export { default as Description } from "./components/Description/Description"
export { default as Dice } from "./components/Dice/Dice"
export { default as Image } from "./components/Image/Image"
export { default as Legalese } from "./components/Legalese/Legalese"
export { default as Note } from "./components/Note/Note"
export {
  default as Page,
  PageTitle,
  Heading1,
  Heading2,
  Heading3,
  ColumnBreak,
} from "./components/Page/Page"
export { default as Spell } from "./components/Spell/Spell"
export { default as SpellList } from "./components/SpellList/SpellList"
export { default as StatBlock } from "./components/StatBlock/StatBlock"
export { default as Table } from "./components/Table/Table"
export { default as TableOfContents } from "./components/TableOfContents/TableOfContents"

export { Container } from "./styled"

export default function DungeonsAndComponents({
  children,
  ...props
}: {
  children: React.ReactNode
} & React.ComponentProps<typeof Container>): JSX.Element {
  return (
    <LinkProvider>
      <Globals />
      <Container {...props}>{children}</Container>
    </LinkProvider>
  )
}
