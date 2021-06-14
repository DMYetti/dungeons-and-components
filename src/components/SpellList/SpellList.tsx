import React, { useMemo } from "react"

import { getOrdinal } from "../../helpers/numbers"

import {
  Container,
  Title,
  Level,
  LevelTitle,
  Spells,
  Spell,
} from "./SpellList.styled"

interface Spell {
  title: string
  level: number
}

export interface SpellListProps extends React.ComponentProps<typeof Container> {
  title?: string
  spells: Spell[]
}

export default function SpellList({
  title,
  spells,
  ...props
}: SpellListProps): JSX.Element {
  const levels = useMemo(() => getLevels(spells), [spells])

  return (
    <Container {...props}>
      {title && <Title>{title}</Title>}

      {levels.map(([level, spells]) => (
        <Level key={level}>
          <LevelTitle>
            {level === 0
              ? `Cantrips (${0} Level)`
              : `${getOrdinal(level)} Level`}
          </LevelTitle>

          <Spells>
            {spells.map((spell) => (
              <Spell key={spell}>{spell}</Spell>
            ))}
          </Spells>
        </Level>
      ))}
    </Container>
  )
}

function getLevels(spells: Spell[]) {
  const levels = new Map<number, string[]>()

  for (const { title, level } of spells) {
    const spells = levels.get(level) || []
    spells.push(title)
    levels.set(level, spells)
  }

  return Array.from(levels.entries()).map<[number, string[]]>(
    ([level, spells]) => [level, spells.sort()],
  )
}
