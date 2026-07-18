const string = "source of truth and mail of accurates";

function charCounts(str) {
    let charCountList = {}
    for (let char of str) {
        if (charCountList[char]) {
            charCountList[char]++;
        } else {
            charCountList[char] = 1;
        }
    }
    return charCountList;
}

// console.log(charCounts(string))

function charCountCheck(str, target) {
    let countList = {};
    let result = 0;
    for (let char of str) {
        // countList[char] = (countList[char] || 0) + 1;
        // This line is a more concise way to count characters. 
        // It checks if countList[char] exists; if it does, it uses that value, 
        // otherwise it uses 0, and then adds 1.
        if (countList[char] && countList[char] !== " ") {
            countList[char]++
        } else {
            countList[char] = 1
        }
    }
    if (countList[target]) {
        result = countList[target];
    }
    return result
}

console.log(charCountCheck(string, "a"))