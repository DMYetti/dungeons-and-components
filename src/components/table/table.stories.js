import React from 'react'
import { withHalfPage } from '~/utils-stories'

import Table from './table'

export default {
  title: 'Components|Table',
  component: Table,
  decorators: [ withHalfPage ],
}

export function Basic() {
  return (
    <Table
      title="Roll a d6"
      columns={[
        {
          key: 'd6',
          label: 'd6',
          transform: (_, index) => index + 1,
          narrow: true,
        },
        {
          key: 'value',
          label: 'Value',
        },
      ]}
      data={[
        { value: 1 },
        { value: 1 },
        { value: 2 },
        { value: 2 },
        { value: 3 },
        { value: 3 },
      ]}
    />
  )
}
