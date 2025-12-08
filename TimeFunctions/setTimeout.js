function Debounce() {
    const timer = setTimeout(() => {
        console.log("first")
    }, 1000)
    return () => clearTimeout(timer)
}

function DebounceIn() {
    const timer = setInterval(() => {
        console.log("interval")
    }, 1000)
    return () => clearInterval(timer)
}

console.log(Debounce());
console.log("Debounce()");
console.log(DebounceIn())