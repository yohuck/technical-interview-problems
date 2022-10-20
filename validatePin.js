const validatePIN = pin => {
    const four = /^\d{4}$/g
    const six = /^\d{6}$/g
    return four.test(pin) || six.test(pin)
}

console.log(validatePIN('123344'))