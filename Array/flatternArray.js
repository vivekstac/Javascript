const array = [[1, 22, 4, 64, 9, 2], [6, 11, 8], 9, [233], [1, [2, [3, 4]], 5]];

// usign ForEach loop

function forFlat(arr) {
    let result = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(forFlat(element));
        } else {
            result.push(element)
        }
    });

    return result
}

// Using for...of method
function forOfFlat(arr) {
    let result = []
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(forOfFlat(item))
        } else {
            result.push(item)
        }
    }
    return result
}
console.log(forFlat(array), forOfFlat(array))

function flat(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (Array.isArray(value)) {
            // recursively flatten the inner array
            let inner = flat(value);
            // instead of concat, push each element manually
            for (let j = 0; j < inner.length; j++) {
                result.push(inner[j]);
            }
        } else {
            result.push(value);
        }
    }

    return result;
}

const nested = [[1, 2], 2, [0, 8, 3, 42], [1, [221, 23]]];
console.log(flat(nested));
// ✅ Output: [1, 2, 2, 0, 8, 3, 42, 1, 221, 23]

function flatten(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc.concat(flatten(item));
        } else {
            acc.push(item);
            return acc;
        }
    }, []);
}
