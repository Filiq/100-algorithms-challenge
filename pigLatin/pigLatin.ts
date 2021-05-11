function pigLatin(str: string): string {
    const vowels = ["a", "e", "i", "o", "u"];
    let consonants: number = -1;
    let found = false;

    for(let i = 0; i < vowels.length; i++){
        if(str[0] === vowels[i]){
            return str + "way";
        }
    }

    for(let i = 0; i < str.length; i++){
        if(found) break;

        for(let j = 0; j < vowels.length; j++){
            if(str[i] === vowels[j]) {
                found = true;
            }
        }

        consonants++;
    }

    return str.slice(consonants) + str.slice(0, consonants) + "ay";
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
