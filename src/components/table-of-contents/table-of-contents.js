import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link/link';

import { Container, List, ListItem, Label, PageNumber } from './table-of-contents.styled';

export default function TableOfContents({ items, ...props }) {
  return (
    <Container {...props}>
      <Rows level={0} items={items} />
    </Container>
  );
}

const itemTypes = [
  PropTypes.string,
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
];
const itemType = PropTypes.arrayOf(PropTypes.oneOfType(itemTypes));
itemTypes.push(itemType);

TableOfContents.propTypes = {
  items: itemType.isRequired,
};

/* eslint-disable react/no-array-index-key */
function Rows({ level, items }) {
  items = normalize(items);

  return (
    <List>
      {items.map((item, index) => (Array.isArray(item) ? (
        <ListItem key={index}>
          <Rows level={level + 1} items={item} />
        </ListItem>
      ) : (
        <ListItem key={index}>
          <PageNumber level={level}>{level}</PageNumber>
          <Label as={Link} level={level} name={item.name}>{item.label}</Label>
        </ListItem>
      )))}
    </List>
  );
}
/* eslint-enable react/no-array-index-key */

Rows.propTypes = {
  level: PropTypes.number.isRequired,
  items: itemType.isRequired,
};

function normalize(list) {
  return list.map(item => (
    typeof item === 'string'
      ? { label: item, name: item }
      : item
  ));
}
