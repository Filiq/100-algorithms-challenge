function alphabetSubsequence(s: string): boolean {
    let boolean = true;
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= s.charCodeAt(i + 1)) {
        boolean = false;
        }
    }

  return boolean;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
