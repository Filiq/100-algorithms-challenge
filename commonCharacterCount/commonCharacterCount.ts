function commonCharacterCount(s1: string, s2: string): number {
   let count = 0;

   const arr1 = s1.split("");
   const arr2 = s2.split("");

   for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
       if(arr1[i] === arr2[j]){
           arr1.splice(i, 1);
           arr2.splice(j, 1);
           count++;
       }
    } 
   }

   return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('bbff', 'fffb'));
console.log(commonCharacterCount("Hello", "World"));