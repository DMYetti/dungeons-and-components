import React from 'react';
import { withHalfPage } from '~/utils-stories';

import Note from './note';

export default {
  title: 'Components|Note',
  component: Note,
  decorators: [ withHalfPage ],
};

export function Basic() {
  return (
    <Note>
      <p>Do the thing!</p>
    </Note>
  );
}

export function BasicWithTitle() {
  return (
    <Note title="Zhu Li">
      <p>Do the thing!</p>
    </Note>
  );
}
