// In this code Find the longest prefix in given array
// For example ["string", "straigth", "strange"] the longest prefix is str

const array = ["string", "straigth", "strange"];


//  brute force
function longestPrefixArray(arr) {
    if (!arr.length) return "";

    let prefix = "";
    let first = arr[0];

    for (let i = 0; i < first.length; i++) {
        let char = first[i];

        for (let j = 1; j < arr.length; j++) {
            // stop if:
            // - index exceeds word length
            // - characters do not match
            if (i >= arr[j].length || arr[j][i] !== char) {
                return prefix;
            }
        }

        prefix += char;
    }

    return prefix;
}


console.log(longestPrefixArray(array))

//  Sorting-based Approach