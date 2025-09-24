//  Anagram means listen => slient each word is different but the char is matched with different place
const string1 = "listen";
const string2 = "slisent";

function findAnagram(str1, str2) {
    const stringL1 = str1.replace(/\s+/g, '').toLowerCase();
    const stringL2 = str2.replace(/\s+/g, '').toLowerCase();
    if(string1.length !== string2.length) {
        return false
    }

    const freq1 = {};
    const freq2 = {};

    for(let char of string1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }
    for(let char of string2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    for(let feq in freq1) {
        if((freq1[feq] !== freq2[feq])) {
            return false;
        }
    }
    return true;
}

console.log(findAnagram(string1, string2))