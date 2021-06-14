import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import Description, { DescriptionProps } from "./Description"

export default {
  title: "Components/Description",
  component: Description,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<DescriptionProps> = (args) => (
  <Description {...args}>
    <p>Do the thing!</p>
  </Description>
)
