// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function fibonacci(n) {
  if (n <= 1) {
    return n
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(6)) // Output: 8
console.log(fibonacci(10)) // Output: 55

// @ts-ignore
function generateFibonacci(limit) {
  var fib = [0, 1] // Initialize the Fibonacci sequence array with the first two numbers

  while (fib[fib.length - 1] + fib[fib.length - 2] <= limit) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]) // Add the next Fibonacci number to the array
  }

  return fib
}
console.log(generateFibonacci(50)) // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generateFibonacci(100)) // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
