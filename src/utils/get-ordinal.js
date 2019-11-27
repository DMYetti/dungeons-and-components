export default function getOrdinal(value) {
  const suffix = { 1: 'st', 2: 'nd', 3: 'rd' }[value] || 'th';
  return `${value}${suffix}`;
}
