const validatePIN = pin => {
    const four = /^\d{4}$|^\d{6}/g
    return four.test(pin)
}

console.log(validatePIN('123344'))