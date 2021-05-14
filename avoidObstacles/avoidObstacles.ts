function avoidObstacles(inputArray: number[]): number {
    const sortedArr = inputArray.sort((a,b) => a - b);
    let jumps = 1;

    for(let i = 0; i < sortedArr.length; i++){
        if((sortedArr[i] + 1) !== sortedArr[i + 1]){
            jumps++;
        }
    }

    return jumps;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));