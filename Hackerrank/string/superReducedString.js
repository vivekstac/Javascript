// Reduce a string of lowercase characters in range ascii[‘a’..’z’]
// by doing a series of operations. In each operation, select a pair of
// adjacent letters that match, and delete them.

// Delete as many characters as possible
// using this method and return the resulting string.
// If the final string is empty, return Empty String

// String: aaabccddd
// aaa → remove aa (first pair)
// Remaining: abccddd
// Now first 2 chars: a and b (not same) → keep
// Next: cc → remove
// Remaining: abddd
// Next: ddd → remove dd
// Remaining: abd
// No more adjacent pairs left.

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