function maxChar(str) {
    let freq = {};
    let maxCount = 0;
    let maxCharacter = "";

    // Step 1: Count character frequency
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: Find max frequency
    for (let char in freq) {
        if (freq[char] > maxCount) {
            maxCount = freq[char];
            maxCharacter = char;
        }
    }

    return maxCharacter;
}

function maxChar(str) {
    const freq = {};
    let maxChar = "";
    let maxCount = 0;

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;

        if (freq[char] > maxCount) {
            maxCount = freq[char];
            maxChar = char;
        }
    }

    return maxChar;
}



console.log(maxChar("abcccccccd")) // "c"
console.log(maxChar("apple 1231111")) // "1"