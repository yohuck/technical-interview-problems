
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


let longest = (s1, s2) => {
    let temp = []
    let returnString = ''
    s1.split('').forEach( letter => {
      temp.includes(letter) ? console.log('') : temp.push(letter)
    })
    s2.split('').forEach ( letter =>{
      temp.includes(letter) ? console.log('') : temp.push(letter)
      })
      
    temp = temp.sort()
    
    temp.forEach(letter => {
      returnString += letter
    })
    
    
    return returnString
  }

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"

console.log(longest(a,b)) // 'abcdefklmopqwxy

a = "abcdefghijklmnopqrstuvwxyz"

console.log(longest(a,b)) // 'abcdefghijklmonpqrstuvwxyz

a = 'abbc'
b = 'bdfg'

console.log(longest(a,b)) // 'abcdfg'