function almostIncreasingSequence(sequence: number[]): boolean {

    let increasing = true;

    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] >= sequence[i + 1]){
            increasing = false;
        } 
    }

    return increasing;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([1, 1, 2, 4, 5])) 
console.log(almostIncreasingSequence([1, 2, 4, 5])) 