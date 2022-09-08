const isIsogram = str => {
    let arr = str.toLowerCase().split('')
    arr.sort()
    for (let i = 0; i < arr.length; i++){
        if ( arr[i] == arr[i + 1]){
            return false
        }
    } return true
} 

console.log(isIsogram('moOse')) // false