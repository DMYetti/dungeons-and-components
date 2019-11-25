const regex = /^(\d+)d(\d+)\+?(-?\d+)?$/;

export function getDiceAverage(value) {
  const [ _, count, die, bonus ] = value.match(regex);
  return Math.floor(count * (die + 1) / 2 + bonus);
}
