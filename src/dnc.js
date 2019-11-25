import PropTypes from 'prop-types';
import React from 'react';

import Page, { PageTitle, Heading1, Heading2, Heading3, ColumnBreak } from './components/page';
import Description from './components/description';
import Note from './components/note';
import Table from './components/table';
import ClassTable from './components/class-table';
import TableOfContents from './components/table-of-contents';
import Spell from './components/spell';
import SpellList from './components/spell-list';
import StatBlock from './components/stat-block';

import { Globals, Container } from './dnc.styled';

export {
  Page, PageTitle, Heading1, Heading2, Heading3, ColumnBreak,
  Description,
  Note,
  Table,
  ClassTable,
  TableOfContents,
  Spell,
  SpellList,
  StatBlock,
};

export default function PHB({ children, ...props }) {
  return (
    <Container {...props}>
      <Globals />
      {children}
    </Container>
  );
}

PHB.propTypes = {
  children: PropTypes.node,
};