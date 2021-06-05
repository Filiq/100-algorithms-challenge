function firstDuplicate(a: number[]): number {
    let nums = {};
    

    for(let i = 0; i < a.length; i++){
        if (nums.hasOwnProperty(a[i]) && !nums[a[i]].duplicated){
            nums[a[i]] = {duplicated: true, index: i};
        }

        if(!nums.hasOwnProperty(a[i])){
            nums[a[i]] = {duplicated: false};
        }  
    }

    if (Object.entries(nums).filter(obj => obj[1].duplicated).length === 0){
        return -1;
    }

    return Object.entries(nums).filter(obj => obj[1].duplicated).sort((a, b) => a[1].index - b[1].index)[0][0];
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
