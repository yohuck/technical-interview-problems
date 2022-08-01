// Given an integer n, count the total number of 1 digits appearing in all non-negative integers less than or equal to n.

const numberOfOnes = int => {
    let ones = 0
    for (let i = 0; i <= int; i++){
        i.toString().split('').forEach(str => str === '1' ? ones++ : '');
    } return ones
}

console.log(numberOfOnes(4)) // 7
console.log(numberOfOnes(11)); // 4
console.log(numberOfOnes(1000)); // 301