function validTime(time: string): boolean {
    const [hours, minutes] = time.split(":");

    return parseInt(hours) < 25 && parseInt(minutes) < 60;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));