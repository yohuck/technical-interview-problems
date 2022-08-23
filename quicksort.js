//initialize unsorted array
let unsorted = [65,88,41,23,50,90,34,2,17,77]

const quickSort = arr => {
    // Stop condition for recursion
    if (arr.length <= 1){
        return arr
    } 

    // Find the pivot and initialize the lower & higher arrays
    let pivot = Math.floor(Math.random()*arr.length)
    let lower = []
    let higher = []
    // Swap the pivot with the last element
    let temp = arr[pivot]
    arr[pivot] = arr[(arr.length - 1)]
    arr[(arr.length - 1)] = temp
    // Loop through the array and add element to higher/lower
    for (let i = 0; i < (arr.length - 1); i++ ){
        arr[i] > arr[(arr.length - 1)] ? higher.push(arr[i]) : lower.push(arr[i])
    }

    // Recursively sort the lower section
    let bottom = quickSort(lower)
    // Recursively sort the higher section
    let top = quickSort(higher)

    // Add the pivot to the bottom
    bottom.push(temp)

    // Concat wit the top and return
    return bottom.concat(top)

}

console.log(quickSort(unsorted)) // [2, 17, 23, 34, 41, 50, 65, 77, 88, 90]
