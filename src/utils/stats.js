export function getModifier(score) {
  const negative = score < 10;
  const value = Math.abs(Math.floor((score - 10) / 2));

  return `${negative ? '-' : '+'}${value}`;
}
