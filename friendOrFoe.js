let friendOrFoe = arr => {
    let friends = []
    arr.forEach(name => {
        if (name.split('').length == 4)
        friends.push(name)
    }); 
    return friends
}

console.log(friendOrFoe(["Willie", "Waylon", "Emmy", "Gram"])) // ['Emmy', 'Gram']