const string = "Hello";

// Find the String Lenth
function findTheLength(str) {
    return str.length
}

function findTheLengthForLoop(str) {
    const strLenth = str.split('')
    return strLenth.length

}

let count = 0;
for (let char of string) {
    count++;
}

const ArrayFromString = Array.from(string).length; // Using Array.from return as an array  ? Better
const length = [...string].length; // Using spread operator ? Better
console.log(length);  // Output: 5

console.log(count, ArrayFromString);
console.log(findTheLength(string), findTheLengthForLoop(string))

const strmultiple = "Hello, World!";
console.log(strmultiple.length);  // Output: 13

