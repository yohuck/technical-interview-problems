const generateArrays = (n) => {
    const returnArr = [];
    for (let i = 1; i < n + 1; i++){
        const temp = [];
        for (let j = 1; j < i + 1; j++){
            temp.push(j)
        }

        returnArr.push(temp);
    }

    return returnArr
}

console.log(generateArrays(4)) // [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

