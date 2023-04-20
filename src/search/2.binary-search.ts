function strictBinarySearch(searchableList: number[], target: number): number {
  if (searchableList.length < 1) {
    throw new Error('too short')
  }

  let first = searchableList[0]
  let last = searchableList[searchableList.length - 1]
  let i = 0
  while (first <= last) {
    i += 1
    console.log(`strictBinarySearch lap ${i}`)
    const midpoint = Math.floor((first + last) / 2)

    if (searchableList[midpoint] === target) {
      return midpoint
    }

    if (searchableList[midpoint] < target) {
      first = midpoint + 1
    } else {
      last = midpoint - 1
    }
    throw new Error('exhaustive')
  }
}

console.log(strictBinarySearch([1, 10, 3, 8, 5, 4, 7, 9, 6, 9, 2], 7))
