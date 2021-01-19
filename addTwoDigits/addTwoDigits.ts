function addTwoDigits(n: any): number {
    let sum = n.toString().split("").reduce((x, y) => parseInt(x) + parseInt(y));

    return sum;
}

console.log(addTwoDigits(29));