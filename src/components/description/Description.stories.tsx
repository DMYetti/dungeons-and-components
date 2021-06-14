import React from "react"
import { Story, Meta } from "@storybook/react"

import { withHalfPage } from "../../helpers/stories"

import Description, { DescriptionProps } from "./Description"

export default {
  title: "Components/Description",
  component: Description,
  decorators: [withHalfPage],
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Basic: Story<DescriptionProps> = (args) => (
  <Description {...args}>
    <p>Do the thing!</p>
  </Description>
)
