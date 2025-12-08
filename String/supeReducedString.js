function superReducedString(s) {
    // Write your code here

    let result = [];

    for (let char of s) {
        if (result.length && result[result.length - 1] === char) {
            result.pop()
        } else {
            result.push(char)
        }
    }
    return result.length ? result.join("") : "Empty String"

}

const string = "aaabccddd"

console.log(superReducedString(string))