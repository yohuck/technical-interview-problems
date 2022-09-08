const test = 'a a a  b  c c  d d d d  e e e e e'

const topThreeWords = string => {
    string = string.toLowerCase()
    const reg = /[^a-z']/
    let split = string.split(reg)
    
    console.log(split)
    const fil = split.filter(a => a != '')
    split = fil
    let obj = {}

    for (let i = 0; i < split.length; i++){
        obj[split[i]] ? obj[split[i]]++ : obj[split[i]] = 1
    }

    console.log(obj)

    let ab = 0
    let bb = 0
    let cb = 0
    let xb
    let yb
    let zb

    let arr = []

    for (const wordyy in obj) {
        console.log(wordyy)
        let ret = {}
        ret[wordyy] = obj[wordyy]
        console.log(ret)
        arr.push(ret)
    }

    console.log(arr)
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i])
    }

    return [xb,yb,zb]
}

console.log(topThreeWords(test))