
const solution = (number: number): number => {
    let sum: number = 0;
    if (number < 0) return sum;
    for (let i = 0; i < number; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum+= i
        }
    }
    return sum
}

console.log(solution(-10)) // 0
console.log(solution(10)) // 23