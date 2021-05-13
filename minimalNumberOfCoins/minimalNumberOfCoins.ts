function minimalNumberOfCoins(coins: number[], price: number): number {
    let coinsCount = 0;
    let i = coins.length - 1;
    
    while(price !== 0){
        if((price - coins[i]) >= 0 ){
            coinsCount++;
            price = price - coins[i];
        } else {
            i--;
        }
    }

    return coinsCount; 
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));