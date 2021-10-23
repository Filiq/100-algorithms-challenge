function missingNumber(arr: number[]): number {
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++){
        
        if (arr[i+1] - arr[i] !== 1) {   
            return arr[i] + 1;
        }
    }

    if (arr[0] === 0) {
        return arr[arr.length - 1] + 1;
    } 

    return 0;
}

console.log(missingNumber([3, 1, 0]));
console.log(missingNumber([3, 4, 5]));
console.log(missingNumber([0, 1, 2]));