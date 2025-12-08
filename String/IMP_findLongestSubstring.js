// Simple rule to remember:
// Use a sliding window:
// Move right to expand the window
// If a duplicate appears, move left until all characters are unique again
// Keep track of the largest window size

const string = "pwwkew";
function longestSubstring(s) {
    let left = 0;
    let maxLen = 0;
    let startIndex = 0;
    let lastSeen = new Map(); // store last index of each character

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If char was seen and is inside current window → move left
        if (lastSeen.has(char) && lastSeen.get(char) >= left) {
            left = lastSeen.get(char) + 1;
        }

        // Store/update last seen index
        lastSeen.set(char, right);

        // Update max
        if (right - left + 1 > maxLen) {
            maxLen = right - left + 1;
            startIndex = left;
        }
    }

    return {
        substring: s.substring(startIndex, startIndex + maxLen),
        length: maxLen
    };
}


console.log(longestSubstring(string))