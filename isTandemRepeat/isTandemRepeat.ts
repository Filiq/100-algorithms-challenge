function isTandemRepeat(inputString: string): boolean {
    if(inputString.length % 2 !== 0) return false;

    const firstHalf = inputString.slice(0, inputString.length/2);
    const secondHalf = inputString.slice(inputString.length/2);

    return firstHalf === secondHalf;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
