function switchLights(a: number[]): number[] {
    let lights = [...a];

    for (let i = 0; i < lights.length; i++){
        if(a[i] === 1){
            lights = swapLights(lights, i);
        }
    }

    return lights;

}

function swapLights(lights: number[], currentIndex: number): number[] {
    for(let i = 0; i < currentIndex; i++){
        lights[i] = lights[i] === 1 ? 0 : 1;
    }

    lights[currentIndex] = 0;

    return lights;
}


console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));