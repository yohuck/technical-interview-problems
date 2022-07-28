let digitize = n => {
    return n.toString().split('').reverse().map(n => Number(n))
  }

console.log(digitize(34231)); // [1,3,2,4,3]
console.log(digitize(1234567890)) // [0,9,8,7,6,5,4,3,2,1]