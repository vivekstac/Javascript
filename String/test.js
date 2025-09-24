// Reverse the string

const string = "asdsewwwsrat lkhuiefnjk msdam";

function reverse(str) {
    let result = '';

    for(i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result
}

console.log(reverse(string))

// Find the largest number of string

function largestNumber(str) {
    let number = 0;
    let arr = str.split(' ');
    let obj = ''
    for(i = 0; i < arr.length; i++) {
        if(number < arr[i].length) {
            number = arr[i].length;
            obj = arr[i];
        }
    }

    return {
        number,
        obj
    };
}

console.log(largestNumber(string))

// Number calcultation 952 9+4+5 18 1+8 9 ans 9 addition will perform until one digit

const number = 212133139876788;

function numberAddition(num) {
    const stringNum = num.toString();
    let numValue = 0;
    console.log(stringNum)
    for(let i = 0; i < stringNum.length; i++) {
        numValue += Number(stringNum[i])
    }

    if(numValue >= 10) {
        numValue = numberAddition(numValue)
    }
    return numValue

}

console.log(numberAddition(number))

// Is Palindrom or not

const palindr = "womowsss"

function isPalindrom(str) {
    let result = false;
    let left = ''

    for(i = str.length - 1; i >= 0; i--) {
       left += str[i]
    }

    if(str === left) result = true
    return result
}

console.log(isPalindrom(palindr))