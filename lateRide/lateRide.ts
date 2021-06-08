function lateRide(n: number): number {
    let hours = (Math.floor(n / 60)).toString();
    let minutes = (n - Math.floor(n / 60) * 60).toString();
    let sum = 0;
    
    for(let i = 0; i < hours.length; i++){
        sum += parseInt(hours[i]);
    }

    for(let i = 0; i < minutes.length; i++){
        sum += parseInt(minutes[i]);
    }

    return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));
