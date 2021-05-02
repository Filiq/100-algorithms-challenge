function longestDigitsPrefix(inputString: string): string {
    let digits: string = "";
    
    for(let i = 0; i < inputString.length; i++){
        if(!isNaN(parseInt(inputString[i]))){
            digits += inputString[i];

            if(isNaN(parseInt(inputString[i + 1]))) return digits;
        }
    }

    return digits;
}

console.log(longestDigitsPrefix('123aa1'));