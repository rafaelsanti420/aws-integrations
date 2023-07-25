const NthFibNumber = (input: number): any => {
  if (input === 0) return 0
  else if (input === 1) return 1
  return NthFibNumber(input - 1) + NthFibNumber(input - 2)
}

console.log(NthFibNumber(10))
