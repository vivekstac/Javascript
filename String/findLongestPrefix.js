// In this code Find the longest prefix in given strings
// For example "string straigth strange" the longest prefix is str

const string = "string straigth strange";

function findLongestPrefix(str) {
    let strArr = str.split(" ");
    let firstStr = strArr[0];

    for (let i = 1; i < strArr.length; i++) {
        while (strArr[i].indexOf(firstStr) !== 0) {
            firstStr = firstStr.substring(0, firstStr.length - 1)
            if (firstStr === 0) return "";
        }
    }

    return firstStr
}

console.log(findLongestPrefix(string))