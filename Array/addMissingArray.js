// Using sum method
const array = [1, 2, 4, 13, 15, 21]

// It returns only one array for example [1,2 , 4] it return 3
// function findMissingArray(arr) {
//     let n = arr.length + 1;
//     console.log(n)
//     const sumArray = (n * (n + 1)) / 2;
//     //  7 * 8 / 2

//     console.log(sumArray)
//     const accArray = arr.reduce((acc, num) => acc + num, 0);
//     console.log(accArray)
//     return  sumArray - accArray;
// }

function findMissingArray(arr) {
    // const min = Math.min(...arr);
    // const max = Math.max(...arr);
    const minmum = () => {
        let minimum = arr[0];
        for (let num of arr) {
            if (num < minimum) {
                minimum = num
            }
        }
        return minimum
    }

    const maxmum = () => {
        let maximum = arr[0];
        for (let num of arr) {
            if (num > maximum) {
                maximum = num
            }
        }
        return maximum
    }
    let min = minmum();
    let max = maxmum();

    let missing = [];

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missing.push(i)
        }
    }

    return missing
}

function sortArray(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            i = -1 // Reset the loop to start from the beginning after a swap
        }
    }
    return arr
}
// Using set()
function missingSet(arrs) {
    const arr = sortArray(arrs)
    const n = Math.max(...arr);
    let newSet = new Set(arr);
    const result = []

    for (i = 1; i <= n; i++) {
        if (!newSet.has(i)) {
            result.push(i)
        }
    }

    return result;
}

console.log(findMissingArray(array), missingSet(array))

// micro macro
// setTime
// 123 333
// 
