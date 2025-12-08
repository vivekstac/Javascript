// // Reverse the string

// const string = "asdsewwwsrat lkhuiefnjk msdam";

// function reverse(str) {
//     let result = '';

//     for(i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }

//     return result
// }

// console.log(reverse(string))

// // Find the largest number of string

// function largestNumber(str) {
//     let number = 0;
//     let arr = str.split(' ');
//     let obj = ''
//     for(i = 0; i < arr.length; i++) {
//         if(number < arr[i].length) {
//             number = arr[i].length;
//             obj = arr[i];
//         }
//     }

//     return {
//         number,
//         obj
//     };
// }

// console.log(largestNumber(string))

// // Number calcultation 952 9+4+5 18 1+8 9 ans 9 addition will perform until one digit

// const number = 212133139876788;

// function numberAddition(num) {
//     const stringNum = num.toString();
//     let numValue = 0;
//     console.log(stringNum)
//     for(let i = 0; i < stringNum.length; i++) {
//         numValue += Number(stringNum[i])
//     }

//     if(numValue >= 10) {
//         numValue = numberAddition(numValue)
//     }
//     return numValue

// }

// console.log(numberAddition(number))

// // Is Palindrom or not

// const palindr = "womowsss"

// function isPalindrom(str) {
//     let result = false;
//     let left = ''

//     for(i = str.length - 1; i >= 0; i--) {
//        left += str[i]
//     }

//     if(str === left) result = true
//     return result
// }

// console.log(isPalindrom(palindr))
// let out = "";
// for(let i = 0; i < 10; i++) {
//     for(let j = 10; j < 0; j--) {
//         out = out + "* "
//     }

//     // for(let k = 0; k < i; k++) {

//     // }

//     out = out + "\n";
// }

// function countCharString(str, target) {
//     let stringObj = {}
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] !== "") {
//             stringObj[str[i]] = (stringObj[str[i]] || 0) + 1;
//         }
//     }

//     if(target) stringObj = stringObj[target]

//     return stringObj
// }

// console.log(countCharString("sratewbjiasss", "s"))

function findAnagram(str1, str2) {
    if(str1.length !== str2.length) return;
    const strLow1 = str1.toLowerCase()
    const strLow2 = str2.toLowerCase();

    let setObj1 = {};
    let setObj2 = {};

    for(let i = 0; i < strLow1.length; i++) {
        setObj1[strLow1[i]] = (setObj1[strLow1[i]] || 0) + 1;
    }

    for(let j = 0; j < strLow2.length; j++) {
        setObj2[strLow2[j]] = (setObj2[strLow2[j]] || 0) + 1;
    }

    for(let freq in setObj1) {
        if(setObj1[freq] !== setObj2[freq]) {
            return false
        }
    }

    return true;
}

console.log(findAnagram("listen", "silsnt"))