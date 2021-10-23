function integerToStringOfFixedWidth(number: number, width: number): string {
    let str = number.toString();
    const numWidth = str.length;
    const diff = width - numWidth;

    if(numWidth < width){
        let padStart = "";

        for (let i = 0; i < diff; i++){
            padStart = padStart.concat("0");
        }

        return padStart.concat(str);
    }

    if(numWidth < width) {
        return str.substring(diff, str.length);
    }

    return str;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
