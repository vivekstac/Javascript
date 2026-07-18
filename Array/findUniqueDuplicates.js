function findUniqueAndDuplicate(arr) {
    const freq = {};
    const unique = [];
    const duplicate = [];

    // count frequency
    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
    }

    // separate unique & duplicate
    for (let key in freq) {
        if (freq[key] === 1) {
            unique.push(Number(key));
        } else {
            duplicate.push(Number(key));
        }
    }

    return { unique, duplicate };
}

console.log(findUniqueAndDuplicate([1, 2, 3, 2, 4, 5, 5, 6]));

// Output: { unique: [ 1, 3, 4, 6 ], duplicate: [ 2, 5 ] }
