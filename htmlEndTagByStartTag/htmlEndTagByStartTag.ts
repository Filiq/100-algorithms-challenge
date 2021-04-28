function htmlEndTagByStartTag(startTag: string): string {
    startTag = startTag.split(" ");
    startTag = startTag[0][startTag[0].length -1] === ">" ? `</${startTag[0].slice(1)}` : `</${startTag[0].slice(1)}>`

    return startTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))