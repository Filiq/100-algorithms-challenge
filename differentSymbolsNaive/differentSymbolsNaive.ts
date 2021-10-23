function differentSymbolsNaive(s: string): number {
    const uniqueChars = new Set();
    const inputChars = s.split("");

    inputChars.forEach((char) => {
        uniqueChars.add(char);
    });

    return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));
