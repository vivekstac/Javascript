function thirdHighestChar(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let first = 0, second = 0, third = 0;
    let firstChar = "", secondChar = "", thirdChar = "";

    for (let char in freq) {
        const count = freq[char];

        if (count > first) {
            third = second;
            thirdChar = secondChar;

            second = first;
            secondChar = firstChar;

            first = count;
            firstChar = char;
        }
        else if (count > second && count < first) {
            third = second;
            thirdChar = secondChar;

            second = count;
            secondChar = char;
        }
        else if (count > third && count < second) {
            third = count;
            thirdChar = char;
        }
    }

    if (!thirdChar) {
        return "Less than 3 unique characters";
    }

    return {
        char: thirdChar,
        count: third
    };
}
console.log(thirdHighestChar("abracadabra"));
// Function to find the character with the third highest frequency in a string

// Alternative implementation using sorting

function thirdHighestChar(str) {
    const freq = {};

    // Step 1: Count frequency
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: Convert to array & sort
    const sorted = Object.entries(freq).sort(
        (a, b) => b[1] - a[1]
    ); // Sort in descending order based on frequency

    console.log(sorted); // For debugging [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1] ]
    // Step 3: Check edge case
    if (sorted.length < 3) {
        return "Less than 3 unique characters";
    }

    return {
        char: sorted[2][0], // Third most frequent character
        count: sorted[2][1]
    };
}

console.log(thirdHighestChar("abracadabra")); // { char: 'c', count: 1 }
// Function to find the character with the third highest frequency in a string