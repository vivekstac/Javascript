const string = "welew";

function isPalindrom(str) {
    let reverse = ''
    let result = false;
    for(let i = str.length -1; i >=0; i--) {
        reverse += str[i]
    }

    if(str === reverse) {
        result = true
    }

    return result
}


function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrom(string), isPalindrome(string))