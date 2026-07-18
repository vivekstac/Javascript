const string = "Today is my last working day at aximsoft it was a so amazing memorables";

function findLongestString(str) {
    let strArr = str.split(" ");
    let result = strArr[0];

    for (let word of strArr) {
        if (word.length > result.length) {
            result = word;
        }
    }

    return result;
}

console.log(findLongestString(string));