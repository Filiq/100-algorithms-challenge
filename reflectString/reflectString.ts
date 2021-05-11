function reflectString(inputString: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversedAlphabet = "zyxwvutsrqponmlkjihgfedcba";
  let reflectStr = "";  

  for(let i = 0; i < inputString.length; i++){
    reflectStr += reversedAlphabet[alphabet.indexOf(inputString[i])];
  }

  return reflectStr;
}

console.log(reflectString("name"));
