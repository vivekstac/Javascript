const obj = { "2": 2, "3": 1, "1": 2 }

const d = Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, 2)

const e = Object.keys(Object.fromEntries(d)).map(Number)

console.log(e)