const basicOp = (operation, value1, value2) => {
    switch (operation) {
        case '+': return value1 + value2
            break;
        case '-': return value1 - value2
            break;
        case '/': return value1 / value2
            break;
        case '*': return value1 * value2
            break;
        default: return -1
            break;
    }
}

console.log(basicOp('+',4,7))