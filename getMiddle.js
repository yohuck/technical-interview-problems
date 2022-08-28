const getMiddle = string => {
    if (string.split('').length % 2 === 0 ){
        return string[Math.floor((string.split('').length/2)) - 1] + string[(Math.floor((string.split('').length/2)))] 
    } return string[Math.floor((string.split('').length/2))]
    
}

console.log(getMiddle('hello'))
console.log(getMiddle('test'))