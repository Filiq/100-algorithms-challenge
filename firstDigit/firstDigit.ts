function firstDigit(inputString: string): string {
    for(let i = 0; i < inputString.length; i++){
        if(!isNaN(inputString[i])){
            return inputString[i];
        }
    }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
