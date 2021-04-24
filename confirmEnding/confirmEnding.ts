function confirmEnding(str: string, target: string) {
   const targetLength = target.length;
   const strLength = str.length;

   return str.substr(strLength - targetLength, strLength) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));