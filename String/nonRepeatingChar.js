// First non repeating char in string

const string = "assggjebhuquwua";

function nonRepeatingChar(str) {
    const frequentObj = {};

    for(let char of str) {
        if(frequentObj[char]) {
            frequentObj[char] += 1;
        } else {
            frequentObj[char] = 1;
        }
    }

    for(let char of str) {
        if(frequentObj[char] == 1) {
            return char;
        }
    }

    return null;
}

//  Hash Map() method
function hasNonRepeatingString(str) {
    const frequentObj = {};
    for(let char of str) {
        frequentObj[char] = (frequentObj[char] || 0) + 1;
    }

    for(let char of str) {
        if(frequentObj[char] === 1) {
            return char;
        }
    }

    return null;
}

//  Brute force two loops
function twoLoopNonRepeat(str) {
    for(let i = 0; i < str.length; i++) {
        let isRepeat = true;

        for(let j = 0; j < str.length; j++) {
            if(i !== j && str[i] === str[j]) {
                isRepeat = false;
                break;
            }
        }

        if(isRepeat) {
            return str[i]
        }
    }

    return null
}

// Using map() method
function mapNonRepeat(str) {
    let frequentObj = new Map();

    for(let char of str) {
        frequentObj.set(char, (frequentObj.get(char) || 0) + 1);
    }

    for(let [char, count] of frequentObj) {
        if(count === 1) return char;
    }

    return null;

}
// using indexof and lastIndexOf

function indexNonRepeat(str) {
    for(let char of str) {
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null
}

// Using For In

function firstNonRepeating(str) {
    let freq = {};
    for (let i in str) {
        let char = str[i];
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let i in str) {
        if (freq[str[i]] === 1) return str[i];
    }

    return null;
}

function firstNonRepeating(str) {
    return [...str].find(ch => str.indexOf(ch) === str.lastIndexOf(ch)) || null;
}

console.log(nonRepeatingChar(string), hasNonRepeatingString(string), twoLoopNonRepeat(string), mapNonRepeat(string)
,indexNonRepeat(string))