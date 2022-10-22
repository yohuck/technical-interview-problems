const testList = [1,6,3,4,5]

const removeSmallest = list => {
    if (list.length){
        let copy = [...list]
        let lowest = copy[0]
        for (let i = 0; i < copy.length; i++){
            if (copy[i] < lowest){
                lowest = copy[i]
            }
        } let index = copy.indexOf(lowest)
        copy.splice(index,1)
        return copy
    } else return list
}

console.log(removeSmallest(testList))
console.log(testList)

