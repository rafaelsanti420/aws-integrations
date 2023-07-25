function permutation(str: string, prefix: string) {
  if (str.length === 0) {
    return prefix
  } else {
    for (let i = 0; i < str.length; i++) {
      const rem: string = str.slice(0, i) + str.slice(i + 1)
      permutation(rem, prefix + str.charCodeAt(i))
    }
  }
}

console.log(permutation('abcd', 'fe'))
