import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes, argOff } from "../../helpers/stories"

import StatBlock, { StatBlockProps } from "./StatBlock"

export default {
  title: "Components/StatBlock",
  component: StatBlock,
  decorators: [withHalfPage],
  argTypes: {
    ...argTypes,
    languages: argOff,
    senses: argOff,
    abilities: argOff,
    savingThrows: argOff,
    skills: argOff,
    damageResistances: argOff,
    damageImmunities: argOff,
    damageVulnerabilities: argOff,
    conditionImmunities: argOff,
    properties: argOff,
    traits: argOff,
    actions: argOff,
  },
} as Meta

export const Basic: Story<StatBlockProps> = (args) => <StatBlock {...args} />

Basic.args = {
  title: "Commoner",
  template: "commoner",
}
