import PropTypes from 'prop-types';
import React from 'react';

import Page, { PageTitle, Heading1, Heading2, Heading3, ColumnBreak } from './components/page/page';
import Description from './components/description/description';
import Note from './components/note/note';
import Table from './components/table/table';
import ClassTable from './components/class-table/class-table';
import TableOfContents from './components/table-of-contents/table-of-contents';
import Spell from './components/spell/spell';
import SpellList from './components/spell-list/spell-list';

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
