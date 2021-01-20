function adjacentElementsProduct(inputArray: number[]): number {
    let biggest = 0;
    for(let i = 0; i < inputArray.length; i++){
        if(biggest < (inputArray[i === 0 ? i : i - 1] * inputArray[i])) {
            biggest = inputArray[i === 0 ? i : i - 1] * inputArray[i];
        }
    }
    return biggest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));