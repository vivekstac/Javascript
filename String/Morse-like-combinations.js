// Mores Like combinations
// Given a string,
// return an array of all the combinations of the string that can be formed by
// replacing each character with a dot (.) or a dash (-).

function morseCombinations(s) {
    let index = 0;
    let result = ""

    while (index < s.length) {

        if ((s.slice(index, index + 2) === "--") || (s[index] === "-" && s[index + 1] === "-")) {
            result += 2
            index += 2
        } else if ((s.slice(index, index + 2) === "-.") || (s[index] === "-" && s[index + 1] === ".")) {
            result += 1
            index += 2
        } else {
            result += 0
            index += 1
        }
    }

    return result
}

// complexity O(n) where n is the length of the string s

console.log(morseCombinations('.-.--.-.')) // 01201
console.log(morseCombinations('..--')) // 002
console.log(morseCombinations('---')) // 222