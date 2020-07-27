import React from 'react'
import { withFullPage } from '~/utils-stories'

import ClassTable from './class-table'

export default {
  title: 'Components|ClassTable',
  component: ClassTable,
  decorators: [ withFullPage ],
}

export function Basic() {
  return (
    <ClassTable
      title="Sorcerer"
      levels={[
        { sorcery: 0, features: [ 'Spellcasting', 'Sorcerous Origin' ], spellcasting: { cantrips: 4, spells: 2, slots: [ 2 ] } },
        { sorcery: 2, features: [ 'Font of Magic' ], spellcasting: { cantrips: 4, spells: 3, slots: [ 3 ] } },
        { sorcery: 3, features: [ 'Metamagic' ], spellcasting: { cantrips: 4, spells: 4, slots: [ 4, 2 ] } },
        { sorcery: 4, features: [ 'Ability Score Improvement' ], spellcasting: { cantrips: 5, spells: 5, slots: [ 4, 3 ] } },
        { sorcery: 5, spellcasting: { cantrips: 5, spells: 6, slots: [ 4, 3, 2 ] } },
        { sorcery: 6, features: [ 'Sorcerous Origin Feature' ], spellcasting: { cantrips: 5, spells: 7, slots: [ 4, 3, 3 ] } },
        { sorcery: 7, spellcasting: { cantrips: 5, spells: 8, slots: [ 4, 3, 3, 1 ] } },
        { sorcery: 8, features: [ 'Ability Score Improvement' ], spellcasting: { cantrips: 5, spells: 9, slots: [ 4, 3, 3, 2 ] } },
        { sorcery: 9, spellcasting: { cantrips: 5, spells: 10, slots: [ 4, 3, 3, 3, 1 ] } },
        { sorcery: 10, features: [ 'Metamagic' ], spellcasting: { cantrips: 6, spells: 11, slots: [ 4, 3, 3, 3, 2 ] } },
        { sorcery: 11, spellcasting: { cantrips: 6, spells: 12, slots: [ 4, 3, 3, 3, 2, 1 ] } },
        { sorcery: 12, features: [ 'Ability Score Improvement' ], spellcasting: { cantrips: 6, spells: 12, slots: [ 4, 3, 3, 3, 2, 1 ] } },
        { sorcery: 13, spellcasting: { cantrips: 6, spells: 13, slots: [ 4, 3, 3, 3, 2, 1, 1 ] } },
        { sorcery: 14, features: [ 'Sorcerous Origin Feature' ], spellcasting: { cantrips: 6, spells: 13, slots: [ 4, 3, 3, 3, 2, 1, 1 ] } },
        { sorcery: 15, spellcasting: { cantrips: 6, spells: 14, slots: [ 4, 3, 3, 3, 2, 1, 1, 1 ] } },
        { sorcery: 16, features: [ 'Ability Score Improvement' ], spellcasting: { cantrips: 6, spells: 14, slots: [ 4, 3, 3, 3, 2, 1, 1, 1 ] } },
        { sorcery: 17, features: [ 'Metamagic' ], spellcasting: { cantrips: 6, spells: 15, slots: [ 4, 3, 3, 3, 2, 1, 1, 1, 1 ] } },
        { sorcery: 18, features: [ 'Sorcerous Origin Feature' ], spellcasting: { cantrips: 6, spells: 15, slots: [ 4, 3, 3, 3, 3, 1, 1, 1, 1 ] } },
        { sorcery: 19, features: [ 'Ability Score Improvement' ], spellcasting: { cantrips: 6, spells: 15, slots: [ 4, 3, 3, 3, 3, 2, 1, 1, 1 ] } },
        { sorcery: 20, features: [ 'Sorcerous Restoration' ], spellcasting: { cantrips: 6, spells: 15, slots: [ 4, 3, 3, 3, 3, 2, 2, 1, 1 ] } },
      ]}
      preCols={[
        { key: 'sorcery', label: 'Sorcery Points' },
      ]}
    />
  )
}
