const DNAStrand = dna => {
    const complement = (n) =>{  
        switch (n) {
            case 'A': return'T'
                break;
            case 'T': return 'A'
                break;
            case 'C': return 'G'
                break;
            case 'G': return 'C'
                break;
            default:
                break;
        }
    }
    return dna.split('').map(m => complement(m)).join('');
}

console.log(DNAStrand('ATTGC')) // TAACG
console.log(DNAStrand('GTAT')) // CATA