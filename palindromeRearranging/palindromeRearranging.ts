function palindromeRearranging(inputString: string): boolean {
    let word = inputString.split('').sort();
    let obj = {};
    let uniqueValues = 0;
 
    for (let i = 0; i < word.length; i++) {
        obj.hasOwnProperty(word[i]) ? obj[word[i]]++ : obj[word[i]] = 1;
    }
 
    for (let i = 0; i < inputString.length; i++) {
        uniqueValues += obj[inputString[i]] % 2;
        obj[inputString[i]] = 0;
    }
 
    return uniqueValues < 2;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('aabbb'));