const high = x => {
    const arr = x.split(' ')
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const values = []
    let topScore = 0
    let topWord

    for (let i = 1; i <= 26; i++){
        values.push(i)
    }

    const letterValue = letter => {
        return values[letters.indexOf(letter)]
    }

    const scoreWord = word => {
        const splitUp = word.split('')
        let sum = 0;
        splitUp.forEach(letter => {
            sum += letterValue(letter)
        });
        return sum
    }

    arr.forEach(word => {
        if (scoreWord(word) > topScore){
            topScore = scoreWord(word)
            topWord = word
        }
    })

    return topWord
    }



console.log(high('man i need a taxi up to ubud')) // taxi