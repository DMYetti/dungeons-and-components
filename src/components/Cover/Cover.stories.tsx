import type { Story, Meta } from "@storybook/react"

import React from "react"
import {
  withContainer,
  argTypes,
  argOff,
  argHidden,
} from "../../helpers/stories"

import Cover, { CoverProps } from "./Cover"

export default {
  title: "Components/Cover",
  component: Cover,
  decorators: [withContainer],
  argTypes: {
    ...argTypes,
    image: argOff,
    story: argHidden,
  },
} as Meta

export const Basic: Story<CoverProps> = (args) => <Cover {...args} />

Basic.args = {
  title: "Adventure Title",
  subtitle: "Subtitle about the adventure.",
  author: "Author Name",
  image: {
    src: "https://cdn.dmyetti.com/static/bg.jpg",
    alt: "DM Yetti's favorite space photo",
  },
}
