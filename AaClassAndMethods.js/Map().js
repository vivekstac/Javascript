// Map is a built-in JavaScript object used to store key-value pairs.
// It allows keys of any type and maintains the order of insertion.

const myMap = new Map();

// set() method syntax:
map.set(key, value);
// value you can pass a object, array, or any primitive data type as value in map

myMap.set("name", "Alice");
myMap.set("age", 30);
myMap.set("city", "New York");

// get() method syntax:
map.get(key);
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.get("age"));

// has() method syntax:
map.has(key);
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("country")); // Output: false