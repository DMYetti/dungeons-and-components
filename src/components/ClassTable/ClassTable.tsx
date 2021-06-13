import type { Column } from "../Table/Table"

import React from "react"

import { getOrdinal } from "../../helpers/numbers"
import Table from "../Table/Table"

export default function ClassTable({
  title,
  levels,
  preCols = [],
  postCols = [],
  ...props
}: {
  title: string
  levels: Array<{
    features?: string[]
    spellcasting?: {
      cantrips?: number
      spells?: number
      slots?: number[]
    }
  }>
  preCols?: Column[]
  postCols?: Column[]
} & React.ComponentProps<typeof Table>): JSX.Element {
  const hasCantrips = levels.some((level) => level.spellcasting?.cantrips)
  const hasSpellsKnown = levels.some((level) => level.spellcasting?.spells)
  const maxSpellLevel = Math.max(
    ...(levels
      .map((level) => level.spellcasting?.slots?.length)
      .filter((v) => (typeof v === "number" ? true : false)) as number[]),
  )

  const preData = preCols.map<Column>(
    ({ key, label, transform, ...props }) => ({
      key,
      label,
      align: "center",
      transform: (...props) =>
        (transform && transform(...props)) || orDash(null),
      ...props,
    }),
  )

  const postData = postCols.map<Column>(
    ({ key, label, transform, ...props }) => ({
      key,
      label,
      align: "center",
      transform: (...props) =>
        (transform && transform(...props)) || orDash(null),
      ...props,
    }),
  )

  const spellData =
    maxSpellLevel <= 0
      ? []
      : ([
          hasCantrips && {
            key: "spellcasting.cantrips",
            label: "Cantrips Known",
            align: "center",
            transform: orDash,
          },
          hasSpellsKnown && {
            key: "spellcasting.spells",
            label: "Spells Known",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 1 && {
            key: "spellcasting.slots[0]",
            label: "1st",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 2 && {
            key: "spellcasting.slots[1]",
            label: "2nd",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 3 && {
            key: "spellcasting.slots[2]",
            label: "3rd",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 4 && {
            key: "spellcasting.slots[3]",
            label: "4th",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 5 && {
            key: "spellcasting.slots[4]",
            label: "5th",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 6 && {
            key: "spellcasting.slots[5]",
            label: "6th",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 7 && {
            key: "spellcasting.slots[6]",
            label: "7th",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 8 && {
            key: "spellcasting.slots[7]",
            label: "8th",
            align: "center",
            transform: orDash,
          },
          maxSpellLevel >= 9 && {
            key: "spellcasting.slots[8]",
            label: "9th",
            align: "center",
            transform: orDash,
          },
        ].filter((v) => v) as Column[])

  return (
    <Table
      {...props}
      wide
      bordered
      title={title}
      data={levels}
      columns={[
        {
          key: "@index",
          label: "Level",
          align: "center",
          transform: (__, index) => getOrdinal(index + 1),
        },
        {
          key: "@index",
          label: "Proficiency Bonus",
          align: "center",
          transform: (__, index) => getProficiencyBonus(index),
        },
        ...preData,
        {
          key: "features",
          label: "Features",
          transform: (v) => (v ? v.join(", ") : orDash(v)),
        },
        ...spellData,
        ...postData,
      ]}
    />
  )
}

function orDash<T>(value: T): T | string {
  return value || "—"
}

function getProficiencyBonus(level: number) {
  return Math.floor(level / 4) + 2
}
