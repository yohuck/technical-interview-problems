const inArray = (a1: string[], a2: string[]): string[] => {
  let matches: string[] = [];
  const hasMatch = (sub: string, toCheck: string): boolean => {
    const a: RegExp = new RegExp(sub);
    return toCheck.search(a) > -1;
  };

  a1.forEach((sub) => {
    for (let i: number = 0; i < a2.length; i++) {
      if (hasMatch(sub, a2[i])) {
        matches.push(sub);
        i = a2.length;
      }
    }
  });
  return matches.sort();
};

console.log(inArray(["xy", "liv", "strong"], ["xyz", "live", "strong"])); // ['liv', 'string', 'xy']
