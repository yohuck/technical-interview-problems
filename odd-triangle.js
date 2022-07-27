let oddRow = (n) => {
    let arr = []
    let firstNum = (n*(n-1) + 1);
    for (let i = 0; i < n; i++){
        let j = firstNum + (i*2);
        arr.push(j)
    } return arr
}

console.log(oddRow(4))
console.log(oddRow(12))

let sumOddRow = n => {
    let sum = 0;
    let firstNum = (n*(n-1) + 1)
    for (let i = 0; i < n; i++){
        sum += (firstNum + (i*2))
    } return sum
}

console.log(sumOddRow(3))