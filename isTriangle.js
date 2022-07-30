const isTriangle = (a,b,c) => {
    let arr = [a,b,c].sort((a,b) => a - b)
    return arr.every(n => n > 0)?  (arr[0] + arr[1]) > arr[2] : false
  }


console.log(isTriangle(1,2,2)) // true
console.log(isTriangle(7,2,2)) // false
console.log(isTriangle(3,2,10)) // false