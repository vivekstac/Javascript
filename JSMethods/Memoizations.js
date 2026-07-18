function memoize(fn) {
    const cache = {};  // ← this stays in memory using closure

    return function (...args) { // ...args is an array of arguments passed 
        // to the memoized function
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Example usage:
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(40)); // This will be much faster than the non-memoized version