let findNextSquare = (sq) => {
    let root = Math.sqrt(sq);
    return root === Math.floor(root) ? Math.pow((root + 1),2) : -1
}

console.log(findNextSquare(144)) // 169
console.log(findNextSquare(155)) // -1

