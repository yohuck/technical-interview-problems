const isPangram = string => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const toTest = string.toLowerCase().split('')
    for (let i = 0; i< alphabet.length; i++){
        if (!toTest.includes(alphabet[i])){
            return false
        }
    } return true
}

console.log(isPangram('the quick brown fox jumps over the lazy dog')) //true
console.log(isPangram('Is this sentence a pangram?')) //false