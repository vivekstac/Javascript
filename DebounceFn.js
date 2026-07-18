function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function handle() {
    console.log("is handled by debounce")
}

const debouncedFn = debounce(handle, 1000);
console.log(debouncedFn())


function debounce(fn, delay) {
    let timer;
    return function (...args) {
        //...args is the rest parameter.
        // It collects all arguments into an array. 
        // [3000, 4000] for example

        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}
