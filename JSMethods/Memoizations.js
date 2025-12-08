function memoize(fn) {
    const cache = {};  // ← this stays in memory using closure

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
