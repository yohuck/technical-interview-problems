let findShort = (s) => {
    return s.split(' ').reduce((word1, word2) => word1.length > word2.length ? word2 : word1).length
}

console.log(findShort('oh hello there friends')) // 2
console.log(findShort('Captain Steve Zissou was here')) // 3