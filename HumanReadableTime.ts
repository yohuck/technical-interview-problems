const humanReadable = (seconds: number): string => {
    let secondsLeft: number = seconds
    let minutesGrabbed: number = 0
    let hoursGrabbed: number = 0
    for (let i = 60; secondsLeft >= 60 ; i+=60){
        minutesGrabbed+=1
        secondsLeft-= 60
    }
    for (let i = 60; minutesGrabbed >= 60; i+=60){
        minutesGrabbed-= 60
        hoursGrabbed += 1
    }

    return `${hoursGrabbed.toString().padStart(2,'0')}:${minutesGrabbed.toString().padStart(2,'0')}:${secondsLeft.toString().padStart(2,'0')}`
}

console.log(humanReadable(60)) // 00:01:00
console.log(humanReadable())