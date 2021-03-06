function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let largestDiff = 0;
    for(let i = 0; i < inputArray.length; i++){
        const diff = Math.abs(inputArray[i] - inputArray[i+1])
        if(diff > largestDiff){
            largestDiff = diff;
        }
    }

    return largestDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));