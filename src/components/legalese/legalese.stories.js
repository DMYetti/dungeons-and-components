import React from 'react';
import { withContainer } from '~/utils-stories';

import Legalese from './legalese';

export default {
  title: 'Components|Legalese',
  component: Legalese,
  decorators: [ withContainer ],
};

export function Basic() {
  return (
    <Legalese year="2020" name="Christopher Baker" />
  );
}
