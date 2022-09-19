const number = arr => {
    let ind = 0
    return arr.map(a => `${++ind}: ${a}`)
}

console.log(number(['a', 'b', 'c']))