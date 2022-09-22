const rgb = (r, g, b) => {
    const converter = n => {
        if (n < 16 ) return '1'
        else if (n <= 32) return '2'
        else if (n <= 48) return '3'
        else if (n <= 64) return '4'
        else if (n <= 80) return '5'
        else if (n <= 96) return '6'
        else if (n <= 112) return '7'
        else if (n <= 128) return '8'
        else if (n <= 144) return '9'
        else if (n <= 160) return 'A'
        else if (n <= 176) return 'B'
        else if (n <= 192) return 'C'
        else if (n <= 208) return 'D'
        else if (n <= 224) return 'E'
        else if (n > 240) return 'F'
    }

    return converter(r) + converter(g) + converter(b)
}

console.log(rgb(200, 255, 255))