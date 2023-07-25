const urlify = (s1: string) => {
  return s1
    .split(' ')
    .filter(e => e !== '')
    .join('%20')
}
console.log(urlify('Mr   John       Smith     '))
