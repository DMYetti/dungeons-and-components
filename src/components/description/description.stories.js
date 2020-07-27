import React from 'react'
import { withHalfPage } from '~/utils-stories'

import Description from './description'

export default {
  title: 'Components|Description',
  component: Description,
  decorators: [ withHalfPage ],
}

export function Basic() {
  return (
    <Description>
      <p>Do the thing!</p>
    </Description>
  )
}
