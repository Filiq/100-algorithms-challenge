function boxBlur(image: number[][]): number[][] {
    const res = [];

    for(let i = 0; i < image.length - 2; i++){
        const line = [];

        for(let j = 0; j < image[j].length - 2; j++){
            let sum = 0;
            let count = 0;

            for(let k = j; k < j + 3; k++){
                for(let l = j; l < j + 3; l++){
                    sum += image[k][l];
                    count++;
                }
            }

            line.push(Math.floor(sum/count));
        }

        res.push(line);
    }

    return res;
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));