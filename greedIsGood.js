// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)


let throw1 = [5,1,3,4,1]
let throw2 = [1,1,1,3,1]
let throw3 = [ 3, 3, 5, 5, 5 ]

const score = dice => {
    dice = [...dice]
    let score = 0
    let mult = false
    dice = dice.sort((a,b) => a - b)

    const switchy = int => {
        switch (int) {
            case 1: return 100
                break;
            case 5: return 50
                break;
            case 6: return 60
                break;
            case 4: return 40
                break;
            case 3: return 30
                break;
            case 2: return 20
                break;
            default: return 0
                break;
        }
    }

    for (let i = 0; i < dice.length - 2; i++){
        if (dice[i] == dice[i + 1] && dice[i] == dice[i + 2]){
            mult = true
            const a = dice[i]
            dice[i] = 0
            dice[i + 1] = 0
            dice[i + 2] = 0
            score+= switchy(a)*10
            mult = false
        } 
    }
    
    for (let i = 0 ; i < dice.length; i++){
        if (dice[i] === 1){
            score += 100

        }
        if (dice[i] === 5){
            score += 50
        }
    } return score 
}

console.log(score(throw1)) // 250
console.log(score(throw2)) // 1100
console.log(score(throw3)) // 500