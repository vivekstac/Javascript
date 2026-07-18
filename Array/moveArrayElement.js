function moveElement(arr) {
    let result = []
    let zero = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i])
        } else {
            result.push(arr[i])
        }
    }

    return [...result, ...zero]
}


function moveZeros(arr) {
    let pos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[pos++] = arr[i];// Move non-zero element to the front
        }
    }

    while (pos < arr.length) { // Fill remaining positions with 0
        arr[pos++] = 0; // Fill remaining positions with 0
    }

    return arr;
}

function moveElements(arr) {
    let insertPos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 2) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }

    while (insertPos < arr.length) {
        arr[insertPos] = 2;
        insertPos++;
    }

    return arr;
}

function moveTwosToEnd(arr) {
    let index = 0;

    // Move non-2 elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 2) {
            arr[index++] = arr[i];
        }
    }

    // Fill remaining positions with 2
    while (index < arr.length) {
        arr[index++] = 2; // Fill remaining positions with 2
    }

    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]
