const calculateYears = (p, i, t, d) => {
    let y = 0
    console.log(p,i,t,d,y)
    const cY = (p,i,t,d,y) => {

        console.log(p, d, y)
        if (p > d){
          console.log(y)
          return y
        } else {
            let year = y += 1
            console.log(year)
            let gross = p + p*i
            let tax = (gross - p)*t
            let net = gross - tax
            cY(net, i, t, d, year)
        }


    }
    cY(p,i,t,d,y)
    
  }

  const test = [1000, 0.05, 0.18, 1100]

  console.log(calculateYears(...test))