function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    let prosPreferences = {};
    let prosPrefs = [];

    for(let i = 0; i <pros.length; i++){
        for(let j = 0; j < preferences[i].length; j++){
            if(prosPreferences.hasOwnProperty(preferences[i][j])) {
                prosPreferences[preferences[i][j]].push(pros[i]);
            } else {
                prosPreferences[preferences[i][j]] = [pros[i]];
            }
        }
    }

    for (const prop in prosPreferences){
        prosPrefs.push([[prop], [...prosPreferences[prop]]]);
    }

    return prosPrefs.sort((a, b) => {
        const pref1 = a[0][0].toLowerCase();
        const pref2 = b[0][0].toLowerCase();

        if(pref1 > pref2){
            return 1;
        }

        if (pref1 < pref2){
            return -1;
        }

        return 0;
    })
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));