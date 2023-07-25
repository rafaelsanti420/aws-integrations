let solutions = []

for (let a = 1; a < 1000; a++) {
  for (let b = a; b < 1000; b++) {
    for (let c = a; c < 1000; c++) {
      for (let d = c; d < 1000; d++) {
        if (a !== b && c !== d && a !== c && a !== d && b !== c && b !== d) {
          if (
            Math.pow(a, 3) + Math.pow(b, 3) ===
            Math.pow(c, 3) + Math.pow(d, 3)
          ) {
            solutions.push([a, b, c, d])
          }
        }
      }
    }
  }
}

console.log(solutions)
