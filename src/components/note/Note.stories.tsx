import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import Note, { Props } from "./Note"

export default {
  title: "Components/Note",
  component: Note,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<Props> = (args) => (
  <Note {...args}>
    <p>Do the thing!</p>
  </Note>
)

export const BasicWithTitle: Story<Props> = (args) => (
  <Note {...args} title="Zhu Li">
    <p>Do the thing!</p>
  </Note>
)
