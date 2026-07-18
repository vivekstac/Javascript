// let string = oneTwoThree
// There are  words in the string: 'one', 'Two', 'Three'.

function camelcase(s) {
    // Write your code here
    const arr = s.replace(/([a-z])([A-Z])/g, '$1 $2');
    const arrS = arr.split(" ")
    return arrS.length

}

const string = "oneTwoThree";
console.log(camelcase(string))