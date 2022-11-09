export const solution = (number: number): string => {
  const increments: number[] = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];
  const symbols: string[] = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
let result: string = ''

for (let i: number = 0; i < increments.length; i++){
    while( number >= increments[i]){
        number -= increments[i];
        result += symbols[i]
    }
}
  return result;
};

console.log(solution(1990))
