function sumAllPrimes(num: number): number {
    let sum = num < 2 ? 0 : 2;

    for(let i = 3; i <= num; i++){
        if(isPrime(i)){
            sum += i;
        }
    }

    return sum;
}

function isPrime(num: number): boolean {
    if(num % 2 === 0) return false;

    for(let i = 3; i <= Math.sqrt(num); i += 2){
        if (num % i === 0){
            return false;
        }
    }

    return true;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));