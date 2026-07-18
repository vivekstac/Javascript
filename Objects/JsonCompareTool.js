function getDifferentKeys(json1, json2) {
    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);

    const result = [];

    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            if (!deepEqual(obj1[key], obj2[key])) {
                result.push(key);
            }
        }
    }

    return result;
}

function deepEqual(a, b) {
    // Same reference or primitive
    if (a === b) return true;

    // Handle null
    if (a === null || b === null) return a === b;

    // Different types
    if (typeof a !== typeof b) return false;

    // Arrays
    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }

    // Objects
    if (typeof a === "object") {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;

        for (const key of keysA) {
            if (!deepEqual(a[key], b[key])) return false;
        }
        return true;
    }

    // Fallback
    return false;
}

getDifferentKeys(
    '{"name":"Flavio","age":35,"city":"NY"}',
    '{"name":"Flavioo","age":31,"city":"NY"}'
);
// ["name","age"]

getDifferentKeys(
    '{"a":{"x":1},"b":[1,2]}',
    '{"a":{"x":1},"b":[1,3]}'
);
// ["b"]

getDifferentKeys(
    '{"a":null}',
    '{"a":null}'
);
// []
