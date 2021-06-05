function mostFrequentDigitSum(n: number): number {
    let digitSums = [];


    while(n > 0){
        const digitSum = n.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
        digitSums.push(digitSum);
        n = n - digitSum;
    }

    let o = {}
    let maxCount = 0
    let maxValue 
    
    for (let i = 0; i < digitSums.length; i++) {
        const num = digitSums[i];

        if (!o.hasOwnProperty(num)) {
            o[num] = 0;
        }
        
        o[num]++;

        if (o[num] > maxCount) {
            maxCount = o[num];
            maxValue = num;
        }
    }

    return maxValue;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));