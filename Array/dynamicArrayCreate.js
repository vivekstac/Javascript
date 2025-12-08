const arr = Array.from(
    { length: 4 },
    (_, index) => ({
        id: index,
        name: `Test ${index}`,
    })
);

console.log(arr)

const arrray = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    name: Math.random().toString(36).substring(2),
    phone: Math.floor(Math.random() * 10000000000)
}))

console.log(arrray)