function rotateRight(arr, r) {
    const len = arr.length;

    for (let i = 0; i < r; i++) {
        let last = arr[len - 1]; // store last element

        // shift elements right
        for (let j = len - 1; j > 0; j--) { // from end to start
            arr[j] = arr[j - 1]; // shift elements
        }

        arr[0] = last; // put last at start
    }

    return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5], 3));


function rotateLeft(arr, t) {
    let n = arr.length;
    t = t % n; // Reduce unnecessory loop check for example if t = 10000 then 
    // we only need to rotate t % n times, because rotating n times results in the same array.
    // handle t > n

    for (let r = 0; r < t; r++) {     // repeat t times
        let first = arr[0];             // store first element

        // shift all elements left
        for (let i = 0; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr[n - 1] = first;             // put first at end
    }

    return arr;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
