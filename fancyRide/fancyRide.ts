function fancyRide(l: number, fares: number[]): string {
    const cars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    let bestPrice = {price: 0, index: 0};

    for(let i = 0; i < fares.length; i++){
        if(l * fares[i] <= 20 && l * fares[i] > bestPrice.price){
            bestPrice.price = l * fares[i];
            bestPrice.index = i;
        }
    }

    return cars[bestPrice.index];
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));