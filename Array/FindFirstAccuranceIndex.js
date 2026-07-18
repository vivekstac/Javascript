function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;        // store index
            right = mid - 1;     // move left to find earlier occurrence
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return result;
}
// Above code only works on sorted array becase of arr[mid] < target

// Best way to use
function findFirstOccurrence(arr, is) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === is) return i;
    }
    return -1;
}


console.log(findFirstOccurrence([1, 2, 2, 2, 3, 4], 2)); // 1
console.log(findFirstOccurrence([1, 1, 1, 1], 1));     // 0
console.log(findFirstOccurrence([1, 2, 3, 4], 5));     // -1
console.log(findFirstOccurrence([], 3));            // -1
