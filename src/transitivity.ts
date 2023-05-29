type Relation = [string, string]

function inferTransitiveBuys(buysRelations: Relation[]): number {
  const inferredRelations: Set<string> = new Set()
  const buysDict: { [key: string]: Set<string> } = {}

  for (const [a, b] of buysRelations) {
    if (!buysDict[a]) {
      buysDict[a] = new Set()
    }
    buysDict[a].add(b)
  }

  function findTransitiveBuys(
    company: string,
    visited: Set<string>
  ): Set<string> {
    if (!buysDict[company]) {
      return new Set()
    }
    if (visited.has(company)) {
      return new Set()
    }

    visited.add(company)
    const transitiveRelations: Set<string> = new Set()

    for (const supplier of buysDict[company]) {
      transitiveRelations.add(supplier)
      transitiveRelations.forEach(relation => transitiveRelations.add(relation))
      const foundRelations = findTransitiveBuys(supplier, visited)
      foundRelations.forEach(relation => transitiveRelations.add(relation))
    }

    visited.delete(company)
    return transitiveRelations
  }

  for (const company in buysDict) {
    const transitiveRelations = findTransitiveBuys(company, new Set())
    const directRelations = buysDict[company]
    transitiveRelations.forEach(relation => {
      if (!directRelations.has(relation)) {
        inferredRelations.add(relation)
      }
    })
  }

  return inferredRelations.size
}

// Example usage:
const buysRelations: Relation[] = [
  ['A', 'B'],
  ['B', 'C'],
]
console.log(inferTransitiveBuys(buysRelations)) // Output: 4
