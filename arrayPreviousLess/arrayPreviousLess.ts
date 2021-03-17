function arrayPreviousLess(items: number[]): number[] {
    let numbers: number[] = [];

    items.forEach((item, index) => {
        if(items[index - 1] && items[index - 1] < item){
            numbers.push(items[index - 1]);
        } else {
            numbers.push(-1)
        }
    })

    return numbers;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));