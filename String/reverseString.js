const string = "Hello world sdaasd";

// Using the For Loop Own Thinking
function reverseString(str) {
    let array = str.split(' ');      // ["Hello", "world"]
    let finalArray = [];
    let result = '';

    function innerFun(r) {
        let reversed = [];
        for (let i = r.length - 1; i >= 0; i--) {
            reversed.push(r[i]);
        }
        return reversed;
    }

    for (let i = array.length - 1; i >= 0; i--) {
        finalArray.push(innerFun(array[i]));
    }

    for (let j = 0; j < finalArray.length; j++) {
        result += finalArray[j].join('') + ' ';
    }

    return result.trim();
}

console.log(reverseString(string));  // Output: "dlrow olleH"

function reverse(str) {
    let result = '';
    for(i = str.length - 1; i >=0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverse(string))