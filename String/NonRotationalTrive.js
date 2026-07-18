
function isNonTrivialRotation(s1, s2) {
    // Write your code here
    if (s1.length !== s2.length) return 0;
    let str1 = s1.toLowerCase()
    let str2 = s2.toLowerCase();
    let obj = {}

    if (str1 === str2) return 0;

    let combined = s1 + s1;

    if (combined.includes(s2)) {
        return 1
    }

    const n = s2.length;

    // Step 3: Manual substring check
    //   for (let i = 0; i <= combined.length - n; i++) {
    //     let match = true;

    //     for (let j = 0; j < n; j++) {
    //       if (combined[i + j] !== s2[j]) {
    //         match = false;
    //         break;
    //       }
    //     }

    //     if (match) return 1; // rotation found
    //   }

    return 0
}

// Interview answer
// I first check length and equality. 
// Then I concatenate the first string with itself and verify
// whether the second string exists inside it, which confirms rotation.

console.log(isNonTrivialRotation("a", "a")) // 0
console.log(isNonTrivialRotation("a", "b")) // 0
console.log(isNonTrivialRotation("abcd", "cdab")); // 1 ✅
console.log(isNonTrivialRotation("abcd", "abcd")); // 0 ❌ (identical)
console.log(isNonTrivialRotation("abcd", "acbd")); // 0 ❌
console.log(isNonTrivialRotation("aa", "aa"));     // 0 ❌
console.log(isNonTrivialRotation("water", "terwa")); // 1 ✅
