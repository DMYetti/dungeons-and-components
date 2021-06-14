import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import Legalese, { LegaleseProps } from "./Legalese"

export default {
  title: "Components/Legalese",
  component: Legalese,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<LegaleseProps> = (args) => <Legalese {...args} />

Basic.args = {
  year: "2021",
  name: "DM Yetti",
}
