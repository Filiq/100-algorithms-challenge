function validTime(time: string): boolean {
    time = time.split(":");

    return parseInt(time[0]) < 25 && parseInt(time[1]) < 60;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));