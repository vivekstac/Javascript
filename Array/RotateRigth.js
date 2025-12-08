function rotateRight(arr, r) {
    const len = arr.length;

    for (let i = 0; i < r; i++) {
        let last = arr[len - 1];

        // shift elements right
        for (let j = len - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = last;
    }

    return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5], 3));


function rotateLeft(arr, t) {
    let n = arr.length;
    t = t % n;                        // handle t > n

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
