//initialize unsorted array
let unsorted = [65,88,41,23,50,24,22,34,2,17,77]

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

    // Concat with the top and return
    return bottom.concat(top)

}

console.log(quickSort(unsorted))


const quickSort2 = arr => {
    // Stop condition for recursion
    if (arr.length <= 1){
        return arr
    } 
    // Find the pivot 
    let pivot = Math.floor((arr.length/2))
    // Swap the pivot with the last element
    let temp = arr[pivot]
    arr[pivot] = arr[(arr.length - 1)]
    arr[(arr.length - 1)] = temp
    // Set left and right pointers
    let left = 0
    let right = (arr.length - 1)
    // Move the pointers until they match & swap when left is higher and right is lower
    while (arr[left] != arr[right]){
        let tempy
        if (arr[left] > arr[(arr.length - 1)]){
            tempy = arr[left]
            if (arr[right] < arr[(arr.length - 1)]){
                arr[left] = arr[right]
                arr[right] = tempy
                right--
                left ++
            } else {
                right--
            }
        } else{
            left++
        }
    }

    let bottom = []
    let returnArr = []

    for (let i = 0; i < left ; i++){
        bottom.push(arr.shift())
    }

    let middle = arr.pop()
    return returnArr.concat(quickSort2(bottom), middle, quickSort2(arr))


}

console.log(quickSort2(unsorted))
