const peopleOn = busStops => {
    let people = 0;
    for (let i = 0; i < busStops.length; i++){
        people+= busStops[i][0]
        people -= busStops[i][1]
    }
    return people
}

console.log(peopleOn([[10,0], [3,5], [5,8]])) // 5
console.log(peopleOn([[3,0], [9,1], [4,10], [12,2], [6,1], [7,10]])) // 17