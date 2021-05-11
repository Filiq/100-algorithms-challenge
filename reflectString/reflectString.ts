function reflectString(inputString: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversedAlphabet = "zyxwvutsrqponmlkjihgfedcba";
  let reflectedStr = "";  

  for(let i = 0; i < inputString.length; i++){
    reflectedStr += reversedAlphabet[alphabet.indexOf(inputString[i])];
  }

  return reflectedStr;
}

console.log(reflectString("name"));
