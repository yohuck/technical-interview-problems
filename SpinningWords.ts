export const spinningWords = (string: string): string => {
    let returnWords: string[] = []
    string.split(' ').forEach(word => word.length >= 5 ? returnWords.push(word.split('').reverse().join('')) : returnWords.push(word) )
    return returnWords.join(' ')
}   

console.log(spinningWords('hello darkness my old friend'))

