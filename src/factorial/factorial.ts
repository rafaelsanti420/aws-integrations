// 3! - factorial
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const factorial = (n: number) => {
  if (n === 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(170))
