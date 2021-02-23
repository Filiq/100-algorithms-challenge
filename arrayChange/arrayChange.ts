const arrayChange = (arr: number[]): number => {
    let countUp = 0;
    let countDown = 0;
    const indexOfMax = arr.indexOf(Math.max(...arr));
   
    for (let i = indexOfMax; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i] - arr[i + 1]) + 1;
      countUp += diff;
      arr[i + 1] += diff;
    }
    for (let i = indexOfMax; i > 0; i--) {
      const diff = Math.abs(arr[i] - arr[i - 1]) - 1;
      countDown += diff;
      arr[i - 1] += diff;
    }

    let count = countUp + countDown;

    return count;
  };

console.log(arrayChange([1, 1, 1]));