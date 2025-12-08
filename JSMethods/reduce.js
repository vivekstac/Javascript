// Syntax
array.reduce((accumulator, currentValue, index, array) => {
    return updatedAccumulator;
}, initialValue);


function dynamicReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        accumulator = arr[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}


function dynamicCallback(acc, value) {
    if (typeof acc === 'number' && typeof value === 'number') {
        return acc + value;
    }

    if (typeof acc === 'string' && typeof value === 'string') {
        return acc + value;
    }

    if (Array.isArray(acc) && Array.isArray(value)) {
        return [...acc, ...value];
    }

    if (typeof acc === 'object' && typeof value === 'object') {
        return { ...acc, ...value };
    }

    return acc.toString() + value.toString();
}



const array = [
    { id: 1, name: 'hh0uuvjkczc', phone: 7340138155 },
    { id: 2, name: '3qpsahof4dn', phone: 5958274872 },
    { id: 3, name: '9d9hqkvjuat', phone: 8223820964 },
    { id: 4, name: 'o8dmtswj5w', phone: 6922511830 },
    { id: 5, name: 'uhi3el4tctb', phone: 8441927069 }
]

const reduced = array.reduce((acc, init) => {
    return { ...acc, ...init }
}, {})


console.log(reduced, dynamicReduce(array, dynamicCallback, {}));