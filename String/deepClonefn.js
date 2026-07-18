function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepClone(obj[key]); // Recursively clone nested objects and arrays
    }

    return copy;
}
