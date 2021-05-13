function fermactor(n: number): number[] {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            const diff = i ** 2 - j ** 2;

            if(diff === n) {
                return [i, j];
            }
        }
    }
}

console.log(fermactor(15));