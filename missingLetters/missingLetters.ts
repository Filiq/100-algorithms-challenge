function missingLetters(str: string): string {
   const alphabet = "abcdefghijklmnopqrstuvwxyz";

   for (let i = 0; i < str.length; i++){
       if(str[i] !== alphabet[i]) {
           return alphabet[i];
       }
   }

   return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));