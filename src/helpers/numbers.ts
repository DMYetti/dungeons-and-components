export function getOrdinal(value: number): string {
  const suffix = { 1: "st", 2: "nd", 3: "rd" }[value] || "th"

  return `${value}${suffix}`
}

export function signed(value: number): string {
  if (value > 0) {
    return `+${Math.abs(value)}`
  }

  if (value < 0) {
    return `-${Math.abs(value)}`
  }

  return "0"
}
