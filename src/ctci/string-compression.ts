const stringCompression = (s1: string): string => {
  function splitByGroup(str: string) {
    const groups = []
    let currentGroup = ''

    for (let i = 0; i < str.length; i++) {
      const char = str[i]

      if (i === 0 || char === str[i - 1]) {
        // Add the character to the current group
        currentGroup += char
      } else {
        // Start a new group
        groups.push(currentGroup)
        currentGroup = char
      }
    }

    // Add the last group
    groups.push(currentGroup)

    return groups
  }
  return splitByGroup(s1)
    .map(e => e[0] + e.length)
    .join('')
}
console.log(stringCompression('aabbcccccccdddd'))
