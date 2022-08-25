const zero = []
const one = ["Waylon"]
const two = ["Waylon", "Willie"]
const three = ["Waylon", "Willie", "Hank"]
const four = ["Waylon", "Willie", "Hank", "Johnny"]


let likes = names => {
    let likey
    names.length >= 2 ? likey = 'like' : likey = 'likes'

    const switchy = key => {
        switch (key) {
            case 0: return `no one ${likey} this`
                break;
            case 1: return `${names[0]} ${likey} this`
                break;
            case 2: return `${names[0]} and ${names[1]} ${likey} this`
                break;
            case 3: return `${names[0]}, ${names[1]}, and ${names[2]} ${likey} this`
                break;
            default: return `${names[0]}, ${names[1]}, and ${names.length - 2} others like this`
                break;
        }
    }

    return switchy(names.length)
}

console.log(likes(zero))
console.log(likes(one))
console.log(likes(two))
console.log(likes(three))
console.log(likes(four))

