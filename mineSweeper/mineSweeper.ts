function minesweeper(matrix: boolean[][]): number[][] {
    const result = [];

    for (var i=0; i < matrix.length; i++){
        result.push([]);

        for (var j=0; j < matrix[i].length; j++) {
            var cnt = 0;

            if (i>0) {
                if (matrix[i-1][j]) {
                    cnt += 1;
                }
                if (matrix[i-1][j+1]) {
                    cnt += 1;
                }
                if (matrix[i-1][j-1]) {
                    cnt += 1;
                }
            }
            if (i < matrix.length - 1) {
                if (matrix[i+1][j]){
                    cnt +=1;
                }
                if (matrix[i+1][j+1]) {
                    cnt += 1;
                }
                if (matrix[i+1][j-1]) {
                    cnt +=1;
                }
            }

            if (matrix[i][j+1]) {
                cnt +=1;
            }
            if (matrix[i][j-1]) {
                cnt +=1;
            }

            result[i].push(cnt)
        }
    }

  return result;
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));