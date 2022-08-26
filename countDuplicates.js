const duplicateCount = string => {
    const arr = string.toLowerCase().split('')
    const obj = {}
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]){
            obj[arr[i]] ++
        } else obj[arr[i]] = 1
    }
    for (const key in obj) {
        obj[key] > 1 ? sum++ : ''
        }
    return sum
    }


console.log(duplicateCount('aabbc'))