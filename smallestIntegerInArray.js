let findSmallestInteger = arr =>  arr.reduce((a,b) => a > b ? b : a)

console.log(findSmallestInteger([1,4,7])); // 1

console.log(findSmallestInteger([343,565,78885])); // 343
