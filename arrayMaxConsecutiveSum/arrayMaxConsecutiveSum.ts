function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let largestSum = 0
    let tempSum = 0;
    
    for(let i = 0; i < inputArray.length; i++){
        for(let j = 0; j < k; j++){
            tempSum += inputArray[i + j];
        }

        if(tempSum > largestSum){
            largestSum = tempSum;
        }

        tempSum = 0;
    }

    return largestSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));