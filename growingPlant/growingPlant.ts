function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let totalHeight= 0;
    let days = 0;

    while(totalHeight < desiredHeight){
        totalHeight += upSpeed;

        if(totalHeight < desiredHeight){
            totalHeight -= downSpeed;
        }
        
        days++
    }

    return days;
}

console.log(growingPlant(100, 10, 910))