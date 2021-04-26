function evenDigitsOnly(n: number): boolean {
    for(let i = 0; i < n.toString().length; i++){
        if(parseInt(n.toString()[i]) % 2 !== 0) return false;
    }

    return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));