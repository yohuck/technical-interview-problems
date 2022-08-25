let unsorted = [8,6,7,5,3,0,9]

const bubbleSort = arr => {
    // sets sorted to false
    let sorted = false;
    // length to loop
    let len = arr.length - 1
    // swap helper function
    let swap = i => {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
    }
    // while not sorted...
    while (!sorted){
    // mark as sorted - will turn to false if it makes it through the loop
        sorted = true;
    // loop through the array to the length - decrements each time as the numbers bubble up
        for (let i = 0; i < len; i++){
            // If the earlier number is higher, swap them and mark sorted as false
            if (arr[i] > arr[i + 1]){
                swap(i)
                sorted = false
            }
        // Decrement the length
        } len--
    }
    // returns the arr sorted
    return arr
}

console.log(bubbleSort(unsorted)) // [0,3,5,6,7,8,9]


// Link to my Figma for playing around with the algo: https://www.figma.com/file/3j2GmQnLEE1DyDehQ36DoO/Bubble-Sort?node-id=2%3A394