function insertDashes(str: string): string {
    return str.split(" ").map((chars) => chars.split("").join("-")).join(" ");
}

console.log(insertDashes("aba caba"));