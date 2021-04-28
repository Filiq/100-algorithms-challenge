function isLucky(n: number): boolean {
    const firstHalf: string = n.toString().slice(0, n.toString().length/2);
    const secondHalf: string = n.toString().slice(n.toString().length/2);
    let firstHalfSum: number = 0;
    let secondHalfSum: number = 0;

    for(let i = 0; i < n.toString().length/2; i++){
        firstHalfSum += parseInt(firstHalf[i]);
        secondHalfSum += parseInt(secondHalf[i]);
    }

    return firstHalfSum === secondHalfSum
}

console.log(isLucky(1230));
console.log(isLucky(239017));