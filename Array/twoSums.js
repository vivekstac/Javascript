array = [2, 6, 7, 8, 9, 1];
target = 17;


const twosum = (array, target) => {
  let obj = {};  // To store previously seen numbers and their indices

  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i];
    console.log(diff, "s")

    if (diff in obj) {
      return [obj[diff], i];  // Found a pair: return indices
    } else {
      obj[array[i]] = i;  // Store current number and its index
    }
    console.log(obj)
  }
}

console.log(twosum(array, target))