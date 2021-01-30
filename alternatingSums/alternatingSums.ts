function alternatingSums(a: number[]): number[] {
    const team1 = [];
    const team2 = [];
    const totalTeams = [];
    let team1Sum = 0;
    let team2Sum = 0;

    a.forEach((num, index) => {
        if(index % 2 === 0){
            team1.push(num);
        } else {
            team2.push(num);
        }
    });
    team1.forEach(num => {
        team1Sum = team1Sum + num;
    })
    team2.forEach(num => {
        team2Sum = team2Sum + num;
    })
    
    totalTeams.push(team1Sum);
    totalTeams.push(team2Sum);

    return totalTeams;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))