const isPermutation = (s1: string): boolean => {
  const cleaned = s1.replaceAll(' ', '').toLowerCase()
  const map = new Map()

  for (let i = 0; i < cleaned.length; i++) {
    map.get(cleaned[i])
      ? map.set(cleaned[i], map.get(cleaned[i] + 1))
      : map.set(cleaned[i], 1)
  }
  let odds = 0
  for (const mapElement of map.values()) {
    if (mapElement % 2 !== 0) {
      odds += 1
    }
  }
  return odds > 1
}
console.log(isPermutation('Tact Coa'))
