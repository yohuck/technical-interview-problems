const calculateYears = (p, i, t, d, y=0) => {
    if (p >= d){
      return y
    } else {
        let year = y += 1
        let gross = p + p*i
        let tax = (gross - p)*t
        let net = gross - tax
        return calculateYears(net, i, t, d, year)
    }
}

  const test = [1000, 0.05, 0.18, 1100]

  console.log(calculateYears(...test))