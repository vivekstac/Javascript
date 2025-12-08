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

