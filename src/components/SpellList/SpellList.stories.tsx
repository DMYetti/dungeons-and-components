import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import SpellList, { SpellListProps } from "./SpellList"

export default {
  title: "Components/SpellList",
  component: SpellList,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<SpellListProps> = (args) => (
  <SpellList
    {...args}
    title="Sorcerer Spells"
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
