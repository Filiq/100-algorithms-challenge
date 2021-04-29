function largestNumber(n: number): number {
    let largestNr = "";
    
    for(let i = 0; i < n; i++){
        largestNr += "9";
    }

    return parseInt(largestNr) || 0;
}

console.log(largestNumber(2));