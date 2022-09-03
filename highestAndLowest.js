const highAndLow = numbers => {
    numbers = numbers.split(' ')
    let nummies = []
    for (let i = 0; i < numbers.length; i++){
        nummies.push(+numbers[i])
    }
    
    let high = nummies[0]
    let low = nummies[0]

    for (let i = 0; i < nummies.length; i++){
        if (nummies[i] > high){
            high = nummies[i]
        }
        if (numbers[i] < low){
            low = nummies[i]
        }
    }

    return `${high} ${low}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))