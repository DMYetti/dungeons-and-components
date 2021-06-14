import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import Image, { ImageProps } from "./Image"

export default {
  title: "Components/Image",
  component: Image,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<ImageProps> = (args) => <Image {...args} />

Basic.args = {
  src: "https://cdn.dmyetti.com/static/bg.jpg",
  alt: "DM Yetti's favorite space photo",
}
