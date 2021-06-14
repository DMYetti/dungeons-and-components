import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import StatBlock, { StatBlockProps } from "./StatBlock"

export default {
  title: "Components/StatBlock",
  component: StatBlock,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<StatBlockProps> = (args) => <StatBlock {...args} />

Basic.args = {
  title: "Commoner",
  template: "commoner",
}
