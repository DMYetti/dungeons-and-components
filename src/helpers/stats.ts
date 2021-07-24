import { signed } from "./numbers"

export function getStatModifier(score: number): string {
  const value = Math.abs(Math.floor((score - 10) / 2)) * Math.sign(score - 10)

  return signed(value)
}
