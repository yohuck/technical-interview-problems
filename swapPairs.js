// Given a list, swap every two adjacent nodes.

// > swapPairs([1,2,3,4])
// > [2,1,4,3]

// > swapPairs([])
// > []

const swapPairs = (arr) => {
    for (let i = 0; i < arr.length; i+= 2){
        if (arr[i] != undefined && arr[i+1] != undefined) {
            let temp = [arr[i], arr[i+1]]
            arr[i] = temp[1]
            arr[i+1] = temp[0]
        } 
    } return arr
}

console.log(swapPairs([])) // []
console.log(swapPairs([1,2,3,4])) //[2,1,4,3]
console.log(swapPairs([9,0,9,0,100])) //[0,9,0,9,100]