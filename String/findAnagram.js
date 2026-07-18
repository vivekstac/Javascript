//  Anagram means listen => slient each word is different but the char is matched with different place
const string1 = "listen";
const string2 = "slisent";

function findAnagram(str1, str2) {
    const stringL1 = str1.replace(/\s+/g, '').toLowerCase();
    const stringL2 = str2.replace(/\s+/g, '').toLowerCase();
    if (string1.length !== string2.length) {
        return false
    }

    const freq1 = {}; // frequency objects store 1
    const freq2 = {}; // frequency objects store 2

    for (let char of stringL1) {
        freq1[char] = (freq1[char] || 0) + 1; // count frequency of each char
    }
    for (let char of stringL2) {
        freq2[char] = (freq2[char] || 0) + 1; // count frequency of each char
    }

    for (let feq in freq1) {
        if ((freq1[feq] !== freq2[feq])) {
            return false;
        }
    }
    return true;
}

console.log(findAnagram(string1, string2))


function groupAnagrams(arr) {
    const groups = {}; // object to store grouped anagrams

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        const sortedWord = word.split('').sort().join('');

        if (!groups[sortedWord]) {
            groups[sortedWord] = [];
        }
        groups[sortedWord].push(word);
    }

    return Object.values(groups);
}

const arr = ["eat", "tea", "ate", "tan", "nat", "bat"];
console.log(groupAnagrams(arr));


function isAnagram(a, b) {
    if (a.length !== b.length) return false;

    const count = {}; // Object to count character frequencies

    for (let char of a) {
        count[char] = (count[char] || 0) + 1; //adding the count of each char in string
    }

    for (let char of b) {
        if (!count[char]) return false;
        count[char]--; // removing the count of each char in string
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true ✅
console.log(isAnagram("hello", "olleh"));   // true ✅
console.log(isAnagram("test", "best"));     // false ❌
console.log(isAnagram("aabb", "abbb"));     // false ❌



const array = ["eat", "tea", "ate", "tan", "nat", "bat"];

function groupAnagram(arr) {

    // ✅ Function to check if two strings are anagrams
    function findAnagram(s1, s2) {
        if (s1.length !== s2.length) return false;

        let obj = {};

        for (let i = 0; i < s1.length; i++) {
            let ch = s1[i].toLowerCase();
            obj[ch] = (obj[ch] || 0) + 1;
        }

        for (let i = 0; i < s2.length; i++) {
            let ch = s2[i].toLowerCase();
            if (!obj[ch]) return false;
            obj[ch]--;
        }

        // ensure all counts are zero
        for (let key in obj) {
            if (obj[key] !== 0) return false;
        }

        return true;
    }

    // ✅ Grouping anagrams manually
    let visited = {}; // to avoid duplicates
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue;

        let currentGroup = [arr[i]];
        visited[i] = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (!visited[j] && findAnagram(arr[i], arr[j])) {
                currentGroup[currentGroup.length] = arr[j];
                visited[j] = true;
            }
        }

        result[result.length] = currentGroup;
    }

    return result;
}

console.log(groupAnagram(array));


// returns [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ],[ 'bat' ]]