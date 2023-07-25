const isUnique = (arr: string): boolean => {
  return !([...new Set(arr.split(''))].length !== arr.split('').length)
  // const map = new Map()
  //
  // for (let i = 0; i < arr.length; i++) {}
}
console.log(isUnique('abcd'))
