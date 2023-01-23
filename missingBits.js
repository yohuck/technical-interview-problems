let missingBits = (arr) => {
    let returnArray = [arr[0]]

    for (let i = 1; i < arr.length; i++){
        if (arr[i] === arr[i - 1] + 1 ){
            returnArray.push(arr[i])
        }

        else if (arr[i]  === arr[i - 1] + 2){
            returnArray.push(arr[i] - 1, arr[i])
        }

        else {
            returnArray.push('...', arr[i])
        }
    }

    return `[${returnArray}]`
}

console.log(missingBits([1,2,3,4,20,21,22,23])); // [1,2,3,4,...,20,21,22,23]

console.log(missingBits([1,2,3,5,6])); // [1,2,3,4,5,6]

console.log(missingBits([1,3,20,27])); // [1,2,3,...,20,...,27]



