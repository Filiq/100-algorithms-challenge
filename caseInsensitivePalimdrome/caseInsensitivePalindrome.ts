function isCaseInsensitivePalindrome(inputString: string): boolean {
    let palindrom = inputString.toLowerCase();

    if(palindrom.length < 1) return true;

    if(palindrom[0] === palindrom[palindrom.length - 1]) {
        return isCaseInsensitivePalindrome(palindrom.substr(1, palindrom.length - 2));
    }

    return false;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('aNnA'));