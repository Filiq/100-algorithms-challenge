function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourStrong = yourLeft >= yourRight ? yourLeft : yourRight;
    const yourWeak = yourLeft >= yourRight ? yourRight : yourLeft;
    const friendsStrong = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    const friendsWeak = friendsLeft >= friendsRight ? friendsRight : friendsLeft;

    return yourStrong === friendsStrong && yourWeak === friendsWeak;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
