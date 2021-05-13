function newNumeralSystem(number: string): string[] {
    let startCharCode = 65;
    let endCharCode = number.charCodeAt(0);
    let numerals: string[] = [];

    while(startCharCode <= endCharCode){
        numerals.push(`${String.fromCharCode(startCharCode)} + ${String.fromCharCode(endCharCode)}`);
        
        startCharCode++;
        endCharCode--;
    }

    return numerals;
}   

console.log(newNumeralSystem('G'));