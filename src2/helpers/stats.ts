import { signed } from "./numbers"

export function getStatModifier(score: number): string {
  const value = Math.abs(Math.floor((score - 10) / 2))

  return signed(value)
}
