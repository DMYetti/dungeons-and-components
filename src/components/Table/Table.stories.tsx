import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes, argOff } from "../../helpers/stories"

import Table, { TableProps } from "./Table"

export default {
  title: "Components/Table",
  component: Table,
  decorators: [withHalfPage],
  argTypes: {
    ...argTypes,
    columns: argOff,
    data: argOff,
    footer: argOff,
  },
} as Meta

interface Data {
  value: string
}

export const Basic: Story<TableProps<Data>> = (args) => (
  <Table<Data>
    {...args}
    columns={[
      {
        key: "d6",
        label: "d6",
        transform: (_1, _2, index) => index + 1,
        narrow: true,
      },
      {
        key: "value",
        label: "Value",
      },
    ]}
    data={[
      { value: "1" },
      { value: "1" },
      { value: "2" },
      { value: "2" },
      { value: "3" },
      { value: "3" },
    ]}
  />
)

Basic.args = {
  title: "Roll a d6",
}
