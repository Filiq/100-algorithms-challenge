function addBorder(picture: string[]): string[] {
    let stars = "*"

    const length = picture[0].length - 1;
    for (let i = 0; i < length; i++){
        stars += "*";
    }

    picture.unshift(stars);
    picture.push(stars);

    for(let i = 0; i < picture.length; i++){
    picture[i] = `*${picture[i]}*`;
    }

    return picture;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abcd", "dede"]));