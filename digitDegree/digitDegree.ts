function digitDegree(n: number): number {
  if(n < 10) return 0;
  
  let count = 0;

  for(let i = 0; i < n.toString().length; i++){
    count += parseInt(n.toString()[i]);
  }

  if(count < 10) return count;

  return digitDegree(count);
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));