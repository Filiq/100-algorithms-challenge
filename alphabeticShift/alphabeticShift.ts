function alphabeticShift(inputString: string): string {
    const length = inputString.length;
    let codes = [];
    let letters = [];
    for (let i = 0; i < length; i++) {
      codes.push(inputString.charCodeAt(i) + 1);
    }
    for (let i = 0; i < length; i++) {
      letters.push(String.fromCharCode(codes[i] === 123 ? 97 : codes[i]));
    }
    return letters.join("");
}

console.log(alphabeticShift('crazy'));