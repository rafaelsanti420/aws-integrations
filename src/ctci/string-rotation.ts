// String Rotation: Assume you have a method i 5Su b 5 tr ing which checks if one word is a substring
// of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one
// call to i5Sub5tring (e.g., "waterbottle" is a rotation of" erbottlewat").
// rotation is not a pemutation!
const stringRotation = (s1: string, s2: string) => {
  return (s1 + s1).includes(s2)
  // return s1.split('').sort().join('').includes(s2.split('').sort().join(''))
}

console.log(stringRotation('waterbottle', 'erbottlewat'))
