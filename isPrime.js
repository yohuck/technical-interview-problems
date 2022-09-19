const isPrime = num => {

    if (num == 1 || num < 0){
        return false
    }
    for (let i = 2; i < 10000; i++){
        if (i == num || i == 0){
            continue
        }

        
        console.log(num % i)
        if (num % i == 0){
            
            return false
        }
    } return true
}

console.log(isPrime(13))