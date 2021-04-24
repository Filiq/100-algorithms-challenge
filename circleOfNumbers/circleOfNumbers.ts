function circleOfNumbers(n: number, firstNumber: number): number {
    const numArray = [];

    for (let i = 0; i < n; i++) {
        numArray.push(i)
    }

    if(firstNumber > n/2) return numArray[firstNumber - n/2]

    return numArray[firstNumber + n/2]
}

console.log(circleOfNumbers(10, 2));