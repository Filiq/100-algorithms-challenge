function countVowelConsonant(s: string): number{
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    let foundVowel = false;

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(s[i] === vowels[j]){
                count++;
                foundVowel = true;
            } else {
                if(j === vowels.length - 1){
                    if(!foundVowel) {
                        count+= 2;
                    }

                    foundVowel = false;
                }
            }
        }
    }

    return count;
}

console.log(countVowelConsonant("abcde"));