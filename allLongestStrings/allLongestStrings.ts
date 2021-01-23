function allLongestStrings(inputArray: string[]): string[] {
    let longest = 0;
    const longestStrings = [];

    for(let i = 0; i < inputArray.length; i++){
        if(longest < inputArray[i].length){
            longest = inputArray[i].length;
        }
    }

    for(let i = 0; i < inputArray.length; i++){
        if(longest === inputArray[i].length){
            longestStrings.push(inputArray[i])
        }
    }

    return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));