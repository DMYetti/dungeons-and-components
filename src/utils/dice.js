const regex = /^(\d+)d(\d+)\+?(-?\d+)?$/

export function getDiceAverage(value) {
  if (typeof value !== 'string') {
    return undefined
  }

  const [ , count, die, bonus ] = value.match(regex)
  return Math.floor(+count * (+die + 1) / 2 + (+bonus || 0))
}
