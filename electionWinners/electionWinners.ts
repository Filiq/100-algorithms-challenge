function electionsWinners(votes: number[], k: number): number {
    let inTheRunning = 0;
    const most = Math.max(...votes);
    const sorted = votes.sort((a,b) => b -a);

    if(sorted[0] !== sorted[1] && k === 0){
        return 1;
    }

    votes.forEach((vote) => {
        if(most - vote < k) {
            inTheRunning++;
        }
    })

    return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));