let listA = [1,4,5,6];
let listB = [2,3,4,5,6];
let listBad = [10,22,34];
let listOther = [2,3,4,6,7]

const checkArray = (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}

const findIntersection = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr2[j] === arr1[i]){
                if(checkArray(arr1.slice(i), arr2.slice(j))){
                    return [i,j]
                } else return -1
                
            } 
        }
    } return -1
}

console.log(findIntersection(listA, listB))
// [1,2]

console.log(findIntersection(listA, listBad))
// -1

console.log(findIntersection(listA, listOther))