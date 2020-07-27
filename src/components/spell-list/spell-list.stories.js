import React from 'react'
import { withHalfPage } from '~/utils-stories'

import SpellList from './spell-list'

export default {
  title: 'Components|SpellList',
  component: SpellList,
  decorators: [ withHalfPage ],
}

export function Basic() {
  return (
    <SpellList
      title="Sorcerer Spells"
      spells={[
        {
          title: 'Prestidigitation',
          level: 0,
        },
        {
          title: 'Message',
          level: 0,
        },
        {
          title: 'Magic Missile',
          level: 1,
        },
        {
          title: 'Shield',
          level: 1,
        },
        {
          title: 'Mirror Image',
          level: 2,
        },
        {
          title: 'Fireball',
          level: 3,
        },
      ]}
    />
  )
}
