import React from 'react';
import { withHalfPage } from '~/utils-stories';

import TableOfContents from './table-of-contents';

export default {
  title: 'Components|TableOfContents',
  component: TableOfContents,
  decorators: [ withHalfPage ],
};

export function Basic() {
  return (
    <TableOfContents
      items={[
        'Introduction',
        [
          'How to Play',
        ],
        'Playing The Game',
        [
          'Map',
        ],
        'Conclusion',
        [
          'Development',
        ],
      ]}
    />
  );
}
