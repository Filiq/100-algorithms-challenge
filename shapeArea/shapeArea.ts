function shapeArea(n: number): number {
    if(n === 1) return 1;
    let area = 1;

    for(let i = 1; i <= n; i++){
        area +=+ 4 * i;
    }

    return area;
}

console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));