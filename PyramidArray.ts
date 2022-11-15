export const pyramid = (n: number): number[][] => {
    let returnArr: number[][] = []
    for (let i = 0; i < n; i++){
        let row: number[] = []
        for(let j = 0; j <= i; j++){
            row.push(1)
        }
        returnArr.push(row)
    }
    return returnArr
}

console.log(pyramid(3))

export const pyramid2 = (n: number): number[][] => {
    let ret: number[][] = []
    for (let i = 1; i < n + 1; i++){
        ret.push(Array(i).fill(1))
    }
    return ret
}

console.log(pyramid2(3))