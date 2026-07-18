const arr = [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]];

const result = Object.fromEntries(arr);
console.log(result); // { a: 5, b: 2, r: 2, c: 1, d: 1 }