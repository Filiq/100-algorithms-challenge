function sumOfTwo(a: number[], b: number[], v: number): boolean {
    const hashMap = {};

    for(let i = 0; i < a.length; i++){
        const diff = v - a[i];
        hashMap[diff] = diff;
    }

    for(let i = 0; i < b.length; i++){
        if(hashMap.hasOwnProperty(b[i])) return true
    }

    return false
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));