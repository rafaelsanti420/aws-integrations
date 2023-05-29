// Returns index of the target in list

function strictLinearSearch(searchableList: number[], target: number): number {
  for (let i = 0; i < searchableList.length; i++) {
    console.log(`strictLinearSearch lap ${i + 1}`)
    if (searchableList[i] === target) {
      return i
    }
  }

  throw new Error('not found')
}

console.log(strictLinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))
