import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withContainer, argTypes } from "../../helpers/stories"

import Cover, { CoverProps } from "./Cover"

export default {
  title: "Components/Cover",
  component: Cover,
  decorators: [withContainer],
  argTypes,
} as Meta

export const Basic: Story<CoverProps> = (args) => (
  <Cover
    {...args}
    title="Adventure Title"
    subtitle="Subtitle about the adventure."
    author="Author Name"
  />
)
