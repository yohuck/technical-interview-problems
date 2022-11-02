export const reduceButGrow = (arr:number[]): number => {
    return arr.reduce((a,b) => a * b)
}

console.log(reduceButGrow([1,2,3,4]))