const getSum = (a: number, b: number): number => {
    const arr: number[] = [a,b].sort((a,b) => a - b)
    console.log(arr)
    let sum: number = 0
    for(let i: number = arr[0]; i <= arr[1]; i++){
        sum+= i
    }
    return sum
}

console.log(getSum(-1, -5)) // -15
console.log(getSum(-5, 15)) // 105
