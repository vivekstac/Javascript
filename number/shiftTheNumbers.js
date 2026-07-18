const array = [1, 2, 4, 1, 2, 2, 5, 5, 6, 7]

function shiftNum(arr, tar) {
    let shifted = []
    let others = []

    for (let num of arr) {
        num === tar ? shifted.push(num) : others.push(num)
    }

    return [...others, shifted]
}

function shift(arr) {
    const ones = [];
    const others = [];

    for (let num of arr) {
        num === 1 ? ones.push(num) : others.push(num);
    }

    return [...others, ...ones];
}

console.log(shiftNum(array, 1))