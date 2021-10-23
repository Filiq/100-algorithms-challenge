function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    let printCurrentPage: number = current - 1;
 
    while (numberOfDigits >= printCurrentPage.toString().length) {
        printCurrentPage++;    
        numberOfDigits -= printCurrentPage.toString().length;
    }
    
    return printCurrentPage;
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8,4 ));