const oneEditAway = (s1: string, s2: string): boolean => {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false
  }

  let edits = 0
  let i = 0
  let j = 0

  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      if (edits === 1) {
        return false
      }

      if (s1.length > s2.length) {
        i++
      } else if (s1.length < s2.length) {
        j++
      } else {
        i++
        j++
      }

      edits++
    } else {
      i++
      j++
    }
  }

  if (i < s1.length || j < s2.length) {
    edits++
  }

  return edits === 1
}
console.log(oneEditAway('pale', 'ple'))
console.log(oneEditAway('pales', 'pale'))
console.log(oneEditAway('pale', 'bale'))
console.log(oneEditAway('pale', 'bake'))
// pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false
