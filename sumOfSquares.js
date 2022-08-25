const numbers = [0,3,5,7,4,2]

const squareSum = numbers => {
    if (numbers.length < 1){
        return 0
    } 
    let pop = numbers.pop()
    return Math.pow(pop,2) + squareSum(numbers)
}

console.log(squareSum(numbers)) // 103
console.log(squareSum([]))// 0