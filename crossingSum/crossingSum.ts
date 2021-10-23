function crossingSum(matrix: number[][], a: number, b: number): number {
    let sum: number = 0;
 
    for (let checkRow = 0; checkRow < matrix.length; checkRow++) {
        for (let checkColumn = 0; checkColumn < matrix[checkRow].length; checkColumn++) {
            if (checkColumn === b && checkRow !== a) {
                sum += matrix[checkRow][checkColumn];
            }
            if (checkRow === a){
                sum += matrix[checkRow][checkColumn];
            }
        }
    }
 
    return sum;
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));