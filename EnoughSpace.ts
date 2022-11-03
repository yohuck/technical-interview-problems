export const enough = (cap: number, on: number, wait: number): number => on + wait <= cap ? 0 : on + wait - cap


console.log(enough(10,5,5))