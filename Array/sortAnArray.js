const array = [2, 4,1, 41, 33, 21, 4, 6]

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            i = -1; // restart loop after swap
        }
    }
    return arr;
}
