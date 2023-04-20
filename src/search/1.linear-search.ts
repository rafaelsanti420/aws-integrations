import { orderedNumbers } from '../data'

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

console.log(strictLinearSearch(orderedNumbers, 7))
