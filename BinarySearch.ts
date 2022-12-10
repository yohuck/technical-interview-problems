const BinarySearch = (haystack: number[], needle: number): number => {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor(low + (high - low)/2)
        
        if (haystack[mid] === needle){
            return mid
        } else if ( needle < haystack[mid]){
            high = mid
        } else {
            low = mid + 1
        }
        
    } while (low < high);


    return -1
}

console.log(BinarySearch([1,2,3,4,5], 3))