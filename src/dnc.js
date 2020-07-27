import PropTypes from 'prop-types'
import React from 'react'

import Page, { PageTitle, Heading1, Heading2, Heading3, ColumnBreak } from './components/page/page'
import Description from './components/description/description'
import Note from './components/note/note'
import Table from './components/table/table'
import ClassTable from './components/class-table/class-table'
import TableOfContents from './components/table-of-contents/table-of-contents'
import Spell from './components/spell/spell'
import SpellList from './components/spell-list/spell-list'
import Image from './components/image/image'
import Cover from './components/cover/cover'
import Legalese from './components/legalese/legalese'
import StatBlock from './components/stat-block/stat-block'

import { LinkProvider } from './components/link/link'

import { Globals, Container } from './dnc.styled'

export {
  Container,
  Page, PageTitle, Heading1, Heading2, Heading3, ColumnBreak,
  Description,
  Note,
  Table,
  ClassTable,
  TableOfContents,
  Spell,
  SpellList,
  Image,
  Cover,
  Legalese,
  StatBlock,
}

export default function DNC({ children, ...props }) {
  return (
    <LinkProvider>
      <Globals />
      <Container {...props}>
        {children}
      </Container>
    </LinkProvider>
  )
}

DNC.propTypes = {
  children: PropTypes.node,
}
