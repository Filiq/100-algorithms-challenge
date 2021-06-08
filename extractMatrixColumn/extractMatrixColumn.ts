function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const newColumn = [];

    matrix.forEach(arr => arr.forEach((num, index) => {
        if(index === column) {
            newColumn.push(num)
        }
    }));

    return newColumn;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));