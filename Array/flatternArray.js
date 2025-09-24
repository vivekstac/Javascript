const array = [[1, 22, 4, 64,9,2], [6, 11, 8], 9, [233],  [1, [2, [3, 4]], 5]];

// usign ForEach loop

function forFlat(arr) {
    let result = []
    arr.forEach(element => {
        if(Array.isArray(element)) {
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
    for(let item of arr) {
        if(Array.isArray(item)) {
            result = result.concat(forOfFlat(item))
        } else {
            result.push(item)
        }
    }
    return result
}
console.log(forFlat(array), forOfFlat(array))