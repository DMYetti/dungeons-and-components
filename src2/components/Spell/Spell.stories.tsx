import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import Spell, { SpellProps } from "./Spell"

export default {
  title: "Components/Spell",
  component: Spell,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<SpellProps> = (args) => (
  <Spell
    {...args}
    title="Magic Missile"
    level={1}
    school="Evocation"
    time={[1, "action"]}
    range={[120, "feet"]}
    duration="instantaneous"
    components={{
      verbal: true,
      somatic: true,
    }}
  >
    <p>
      You create three glowing darts of magical force. Each dart hits a creature
      of your choice that you can see within range. A dart deals 1d4 + 1 force
      damage to its target. The darts all strike simultaneously, and you can
      direct them to hit one creature or several.
    </p>
    <p>
      <strong>At Higher Levels.</strong> When you cast this spell using a spell
      slot of 2nd level or higher, the spell creates one more dart for each slot
      level above 1st.
    </p>
  </Spell>
)
