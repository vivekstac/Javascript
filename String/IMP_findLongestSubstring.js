// Simple rule to remember:
// Use a sliding window:
// Move right to expand the window
// If a duplicate appears, move left until all characters are unique again
// Keep track of the largest window size

//  longest substring without repeating characters 
// Athavathu - abcabcbb - irukku na first 
// a => ab => abc => abca (duplicate a varuthu so fist a remove pannanum) so => bca
// => cab => abc => bbb (duplicate b varuthu so left pointer move) => b

const string = "pwwkew";
// sliding window approach - best approach
// O(n) time complexity
// O(min(m, n)) space complexity
function longestSubstring(s) {
    let left = 0; // left pointer of the window
    let maxLen = 0;
    let startIndex = 0;
    let lastSeen = new Map(); // store last index of each character

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If char was seen and is inside current window → move left
        if (lastSeen.has(char) && lastSeen.get(char) >= left) { // duplicate found
            left = lastSeen.get(char) + 1; // move left pointer
        }

        // Store update last seen index
        lastSeen.set(char, right);

        // Update max
        if (right - left + 1 > maxLen) { // found a longer substring
            maxLen = right - left + 1; // update max length
            startIndex = left; // update start index of max substring
        }
    }

    return {
        substring: s.substring(startIndex, startIndex + maxLen),
        // substring(start, end)
        length: maxLen
    };
}


console.log(longestSubstring(string)) // { substring: 'wke', length: 3 }
console.log(longestSubstring("abcabcbb")) // { substring: 'abc', length: 3 }
console.log(longestSubstring("bbbbb")) // { substring: 'b', length: 1 }
console.log(longestSubstring("au")) // { substring: 'au', length: 2 }
console.log(longestSubstring("dvdf")) // { substring: 'vdf', length: 3 }
console.log(longestSubstring("lsdsfs")) // { substring: 'lsd', length: 3 }
// Explanation:
// The longest substring without repeating characters is "wke", which has a length of 3.
// Note: "pwke" is a subsequence, not a substring.
// Hence, it is not considered.
// Time Complexity: O(n) - each character is processed at most twice
// Space Complexity: O(min(m, n)) - m is the size of the charset, n is the size of the string
// In the worst case, we may need to store all characters in the window

// Another Implementation - with less optimal approach low string works fine
// o(n^2) time complexity
// o(n) space complexity
function substring(str) {
    let current = "";
    let longest = "";
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (seen[char] !== undefined) {
            // cut substring after the previous occurrence
            current = current.slice(seen[char] + 1);
        }

        current += char;
        seen[char] = i;

        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
}
console.log(substring("pwwkew")); // "wke"
console.log(substring("abcabcbb")); // "abc"