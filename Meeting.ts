export const meeting = (s: string): string => {
    let names: string[] = s.split(';')
    names.forEach((name, i) => {
        let combined: string[] | string = name.split(':').join(', ').toUpperCase()
        names[i] = `(${combined.toUpperCase()})`
    })
    return names.sort().join('')
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
