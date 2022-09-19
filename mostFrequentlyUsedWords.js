const test = 'a a a  b  c c  d d d d  e e e e e'

const topThreeWords = string => {
    string = string.toLowerCase()
    const reg = /[^a-z']/
    let split = string.split(reg)
    
    const fil = split.filter(a => a != '')
    split = fil
    let obj = {}

    for (let i = 0; i < split.length; i++){
        obj[split[i]] ? obj[split[i]]++ : obj[split[i]] = 1
    }
  
    let returnArr = []
    let top = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    returnArr.push(top)

    obj[top] = 0
    let second = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    returnArr.push(second)
    obj[second] = 0

    let third = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    returnArr.push(third)

    return returnArr
}

console.log(topThreeWords(test))