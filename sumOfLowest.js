const sumTwoSmallestNumbers = n => {
    n.sort((a,b) => a-b);
    return n[0]+n[1];
}

const numbers = [1,5,7,43,23,76,3]

console.log(sumTwoSmallestNumbers(numbers)) //4