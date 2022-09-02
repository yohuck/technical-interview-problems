let test = ['aabb', 'abcd', 'bbaa', 'dada'] 

const returnAnagrams = (word, words) => {
// initialize the return array
let returnArr = []
// function to create an object with the count of any letters in the word
const anagramKv= (word) => {
    let wordArr = word.split('')
    let wordArrKv = {}
    let kv = wordArr.forEach(element => {
        wordArrKv[element] ? wordArrKv[element]++ : wordArrKv[element] = 1;
    });
    return wordArrKv
}
// creates obj for test condition
let testWord = anagramKv(word);
// tests each word against the test condition
words.forEach(word => {
    // creates object
    const obj = anagramKv(word)
    // tests object to test
    for (const count in obj) {
        if (obj[count] != testWord[count]) {
            return []
        }
    }
    // tests test to object
    for (const count in testWord) {
        if (obj[count] != testWord[count]) {
            return []
        }
    }
    // pushes word to the return array if it passes
    returnArr.push(word)
})
// here's the answer
return returnArr

}

console.log(returnAnagrams('abba', test)) // ['aabb', 'bbaa']
console.log(returnAnagrams('abbbba', test)) //[]