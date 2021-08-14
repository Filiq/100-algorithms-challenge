function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    let toManualReview: number[] = [];
    
    for(let i = 0; i < ratings.length; i++){
        let total = 0;

        for(let j = 0; j < ratings[i].length; j++){
            total+= ratings[i][j];
        }

        if((total / ratings[i].length) < threshold){
            toManualReview.push(i);
        } 
    }

    return toManualReview;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));