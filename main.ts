console.log('hi')

const palindrome = 'radar'

const isPalindrome = (input: string): boolean =>
  input.split('').reverse().join('') === input

isPalindrome(palindrome)

// Count occurrences
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 3, 5, 3, 2, 4, 6]

type OccurrencesMap = Record<string, number>

const occurrencesMap: OccurrencesMap = {}

arr.forEach((e, i) => {
  if (occurrencesMap[e]) {
    occurrencesMap[e] += 1
  } else {
    occurrencesMap[e] = 1
  }
})

console.log(arr)
console.log(occurrencesMap)

// Count unique
const numbers = [1, 2, 3, 1, 2, 3, 4, 5]

const uniqueNumbers = new Set(numbers)

const count = uniqueNumbers.size

console.log(count) // Output: 5
