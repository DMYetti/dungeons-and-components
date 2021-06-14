export type DiceType = string

const regex = /^(\d+)d(\d+)\+?(-?\d+)?$/

export function getDiceAverage(value: string): number | undefined {
  const match = value.match(regex)
  if (!match) {
    return undefined
  }

  const count = parseInt(match[1], 10)
  const die = parseInt(match[2], 10)
  const bonus = parseInt(match[3], 10)
  if (!count || !die) {
    return undefined
  }

  return Math.floor((count * (die + 1)) / 2 + (bonus || 0))
}
