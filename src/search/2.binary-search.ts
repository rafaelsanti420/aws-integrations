// Typescript Binary search by SigmaStack.

function strictBinarySearch(searchableList: number[], target: number): number {
  if (searchableList.length < 1) {
    throw new Error('too short')
  }

  let first = searchableList[0]
  let last = searchableList[searchableList.length - 1]
  // main loop
  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2)

    if (searchableList[midpoint] === target) {
      // target is reached
      return midpoint
    }

    // reassign starting and ending positions
    // to search again in the loop

    if (searchableList[midpoint] < target) {
      first = midpoint + 1
    } else {
      last = midpoint - 1
    }
  }

  throw new Error('not found')
}

// testing

console.log('\nTesting strictBinarySearch on ordered list')
const result = strictBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)
console.log(`value found: ${result}`)
console.log('\nTesting strictBinarySearch on unordered list')
try {
  const result2 = strictBinarySearch([1, 10, 3, 8, 5, 4, 7, 9, 6, 9, 2], 7)
  console.log(`value found: ${result2}`)
} catch (e) {
  console.log('value not found')
}
