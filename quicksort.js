//initialize unsorted array
let unsorted = [65,88,41,23,50,90,34,2,17,77]


const quickSort = arr => {
    let pivot = Math.floor(Math.random()*arr.length)
    console.log(pivot)
    const partition = (arr, pivot) => {
        console.log(arr)
        let higher = []
        let lower = []
        let temp = arr[(arr.length-1)]
        arr[arr.length-1] = arr[pivot]
        arr[pivot] = temp
        console.log(arr)

        let leftPointer = 0
        let rightPointer = arr.length - 2
        while (arr[leftPointer] < arr[arr.length-1]) {
            leftPointer++
        }
        console.log(arr[leftPointer])

        while (arr[rightPointer] > arr[arr.length-1]){
            rightPointer--
        }
        console.log(arr[rightPointer])

        let tempy = arr[rightPointer]
        arr[rightPointer] = arr[leftPointer]
        arr[leftPointer] = tempy

        console.log(arr)


        }
    
    partition(arr, pivot)
    return arr
}


console.log(quickSort(unsorted))
