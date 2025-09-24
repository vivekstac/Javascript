const array = [1, 21, 21, 2, 4, 5,6, 8, 12, 12, 23, 8, 9];

// Using Set() - it returns the unique values
const duplcatesRemoved = [...new Set(array)];
// console.log(duplcatesRemoved);

// Using Filter() - it has 3 callbacks filter(val, index, self)
function removeDuplicateFilter(arr) {
    return arr.filter((val, index, self) => self.indexOf(val) === index)
}

// console.log(removeDuplicateFilter(array))

//  Using Reduce() - it has two callbacks acc - is an argument item like [].reduce((acc, item) => {}, [])

function removeReduce(arr) {
    return arr.reduce((acc, item) => {
        return acc.includes(item) ?  acc : [...acc, item] 
    }, [])
}

// console.log(removeReduce(array))

// Using for loop without using build-in functions

function removeDuplicates(arr) {
    let result = [];

    for(let item of arr) {
        let duplicate = false;
        for(let s of result) {
            if(item === s) {
                duplicate = true;
                break;
            }
        }

        if(!duplicate) {
            result.push(item)
        }
    }
    return result
}

function removeDuplicatesFor(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let duplicate = false;
        for(j = 0; j < result.length; j++) {
            if(arr[i] === result[j]) {
               duplicate = true;
               break;
            }
        }

        if(!duplicate) {
            result.push(arr[i])
        }
    }

    return result;
}

function forInRemoveDuplicates(arr) {
    let result = [];
    for(let item in arr) {
        let duplicate = false;
        for(let j in result) {
            if(arr[item] === result[j]) {
                duplicate = true;
                break;
            }
        }

        if(!duplicate) {
            result.push(arr[item])
        }
    }

    return result;
}

console.log(removeDuplicates(array), removeDuplicatesFor(array), forInRemoveDuplicates(array))