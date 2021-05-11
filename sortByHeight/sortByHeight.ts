function sortByHeight(a: number[]): number[] {
    const indexes = [];

    a.forEach((num, index) => {
        if(num === -1) {
            indexes.push(index);
        }
    });

    a = a.filter((num) => num !== -1).sort((a, b) => a - b);

    for(let i = 0; i < indexes.length; i++){
        a.splice(indexes[i], 0, -1);
    }

    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));