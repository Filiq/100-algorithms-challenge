function sumOddFibonacciNums(num: number): number {
    let sum = 1;
    let previous = 1;
    let current = 1;

    while(current <= num){
        if(current % 2 !== 0) {
            sum += current;
        }

        const temp = current + previous;
        previous = current;
        current = temp;
    }

    return sum;
}

console.log(sumOddFibonacciNums(10));
console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));