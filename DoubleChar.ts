export const doubleChar = (str: string): string => {
    return str
        .split("")
        .map((letter) => (letter = letter + letter))
        .join("");
};

console.log(doubleChar("hello"));
