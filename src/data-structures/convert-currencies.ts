type Irate = [string, string, number]

function findConversionPath(
  rates: Irate[],
  startCurr: string,
  endCurr: string,
  visited: Set<string>
): number | null {
  if (startCurr === endCurr) {
    return 1
  }

  if (visited.has(startCurr)) {
    return null
  }

  visited.add(startCurr)

  for (const rate of rates) {
    if (rate[0] === startCurr) {
      const conversion = findConversionPath(
        rates,
        rate[1],
        endCurr,
        new Set(visited)
      )

      if (conversion !== null) {
        return rate[2] * conversion
      }
    }
  }

  return null
}

function convertCurrencies(
  rates: Irate[],
  startCurr: string,
  endCurr: string
): number {
  const visited = new Set<string>()
  const conversion = findConversionPath(rates, startCurr, endCurr, visited)

  if (conversion === null) {
    throw new Error('Conversion path not found')
  }

  return conversion
}

console.log(
  convertCurrencies(
    [
      ['USD', 'JPY', 110],
      ['USD', 'AUD', 1.45],
      ['JPY', 'GBP', 0.007],
    ],
    'GBP',
    'AUD'
  ) === 1.89
)
