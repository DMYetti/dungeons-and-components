import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes, argOff } from "../../helpers/stories"

import SpellList, { SpellListProps } from "./SpellList"

export default {
  title: "Components/SpellList",
  component: SpellList,
  decorators: [withHalfPage],
  argTypes: {
    ...argTypes,
    spells: argOff,
  },
} as Meta

export const Basic: Story<SpellListProps> = (args) => (
  <SpellList
    {...args}
    spells={[
      {
        title: "Prestidigitation",
        level: 0,
      },
      {
        title: "Message",
        level: 0,
      },
      {
        title: "Magic Missile",
        level: 1,
      },
      {
        title: "Shield",
        level: 1,
      },
      {
        title: "Mirror Image",
        level: 2,
      },
      {
        title: "Fireball",
        level: 3,
      },
    ]}
  />
)

Basic.args = {
  title: "Sorcerer Spells",
}
