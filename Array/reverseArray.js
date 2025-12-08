const array = [1, 4, 2, 5, 7, 9];

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr
}

function reverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }

    return result
}

console.log(reverseArray(array), reverse(array))