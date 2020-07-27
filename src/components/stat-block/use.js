import React from 'react'

import StatBlock from './stat-block'

export default function Landing() {
  return (
    <StatBlock
      title="Koala of the Cosmos"
      size="large"
      type="cutie"
      alignment="lawful bogus"

      armorclass={13}
      hitpoints="1d4+5"
      speed={11}

      abilities={{
        charisma: 18,
        constitution: 6,
        dexterity: 15,
        intelligence: 3,
        strength: 18,
        wisdom: 9,
      }}
      proficiencies={[]}

      conditions={{
        immune: [ 'melancholy', 'swagged' ],
        vulnerable: [],
      }}
      damages={{
        immune: [],
        vulnerable: [],
      }}

      languages={[]}
      challenge={0}

      traits={[
        {
          title: 'Onion Stench',
          description: 'Any creatures within 5 feet of this thing develops an irrational craving for onion rings.',
        },
        {
          title: 'Fowl Appearance',
          description: 'While the creature remains motionless, it is indistinguishable from a normal chicken.',
        },
        {
          title: 'Sassiness',
          description: 'When questioned, this creature will talk back instead of answering.',
        },
      ]}

      actions={[
        {
          title: 'Dual Cobra Wristlock',
          type: 'Melee Weapon Attack',
          hit: 5, // or: '@char+1'
          range: [ 'range', 60, 180 ], // or: [ 'reach', 5 ],
          damage: [ '1d6+2', 'force' ],
          description: '',
        },
      ]}
    />
  )
}
