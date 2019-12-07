import React from 'react';
import { withContainer } from '~/utils-stories';

import Cover from './cover';

export default {
  title: 'Components|Cover',
  component: Cover,
  decorators: [ withContainer ],
};

export function Basic() {
  return (
    <Cover />
  );
}
