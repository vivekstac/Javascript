// Function to find the character with the second highest frequency in a string

function secondHighest(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let highest = 0;
    let secondHighest = 0;
    let highestChar = "";
    let secondHighestChar = "";

    for (let char in freq) {
        if (freq[char] > highest) {
            secondHighest = highest;
            secondHighestChar = highestChar;

            highest = freq[char];
            highestChar = char;
        }
        else if (freq[char] > secondHighest && freq[char] < highest) {
            secondHighest = freq[char];
            secondHighestChar = char;
        }
    }

    return {
        highestChar,
        highest,
        secondHighestChar,
        secondHighest
    };
}
console.log(secondHighest("abracadabra"));