function checkPalindrome(inputString: string): boolean {
    if(inputString.length < 1) return true;

    if(inputString[0] === inputString[inputString.length - 1]) {
        return checkPalindrome(inputString.substr(1, inputString.length - 2));
    }

    return false;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
