function flattenArray(arr: any[]): any[] {
    const finalArr = [];

    // Without recursion
    //return arr.toString().replace(/,/g, '').split('')

    recursiveFlatten(arr);

    function recursiveFlatten(arr: any[]) {
        arr.forEach((el) => {
            if(Array.isArray(el)){
                recursiveFlatten(el)
            } else {
                finalArr.push(el);
            }
        })
    }

    return finalArr;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
