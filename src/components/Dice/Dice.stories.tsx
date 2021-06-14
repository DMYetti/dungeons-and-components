import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import Dice, { DiceProps } from "./Dice"

export default {
  title: "Components/Dice",
  component: Dice,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<DiceProps> = (args) => <Dice {...args} />

Basic.args = {
  value: "3d6+3",
  type: "piercing",
}
