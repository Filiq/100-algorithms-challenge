function convertString(s: string, t: string): boolean {
    let convertedString = "";
    let index = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === t[index]){
            convertedString += s[i];
            index++;
        }

        if(convertedString === t) return true;
    }

    return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
