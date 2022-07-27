let squareDigits = (int) => {
    return int.toString().split('').map(n => +n*+n).reduce((a,b) => +`${a}${b}` )
  }
  
  console.log(squareDigits(234)) //4916
  console.log(squareDigits(333)) // 999
  