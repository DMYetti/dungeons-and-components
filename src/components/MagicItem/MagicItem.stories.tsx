import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import MagicItem, { MagicItemProps } from "./MagicItem"

export default {
  title: "Components/MagicItem",
  component: MagicItem,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<MagicItemProps> = (args) => (
  <MagicItem {...args}>
    <p>
      This bag has an interior space considerably larger than its outside
      dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The
      bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet.
      The bag weighs 15 pounds, regardless of its contents. Retrieving an item
      from the bag requires an action.
    </p>
    <p>
      If the bag is overloaded, pierced, or torn, it ruptures and is destroyed,
      and its contents are scattered in the Astral Plane. If the bag is turned
      inside out, its contents spill forth, unharmed, but the bag must be put
      right before it can be used again. Breathing creatures inside the bag can
      survive up to a number of minutes equal to 10 divided by the number of
      creatures (minimum 1 minute), after which time they begin to suffocate.
    </p>
    <p>
      Placing a bag of holding inside an extradimensional space created by a
      handy haversack, portable hole, or similar item instantly destroys both
      items and opens a gate to the Astral Plane. The gate originates where the
      one item was placed inside the other. Any creature within 10 feet of the
      gate is sucked through it to a random location on the Astral Plane. The
      gate then closes. The gate is one-way only and can't be reopened.
    </p>
  </MagicItem>
)

Basic.args = {
  title: "Bag of Holding",
  type: "wondrous item",
  rarity: "uncommon",
}
