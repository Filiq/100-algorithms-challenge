function areSimilar(a: number[], b: number[]): boolean {
    if(a.toString() === b.toString()) return true;

   a.forEach((item, index) => {
       if(item === b[index]){
        a.splice(index, 1);
        b.splice(index, 1);
       }
   });

   if(a.toString() === b.reverse().toString()) return true;

   return false
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])); //true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); //true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); //false
console.log(areSimilar([1, 2, 3], [1, 2, 3, 4])); //false 
console.log(areSimilar([1, 2, 3, 4], [2, 1, 4, 3])); //false 
console.log(areSimilar([1, 2, 5, 6, 9], [1, 2, 6, 6, 9])); //false 