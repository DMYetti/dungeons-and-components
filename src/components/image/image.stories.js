import React from 'react'
import { withHalfPage } from '~/utils-stories'

import Image from './image'

export default {
  title: 'Components|Image',
  component: Image,
  decorators: [ withHalfPage ],
}

export function Basic() {
  return (
    <Image />
  )
}
