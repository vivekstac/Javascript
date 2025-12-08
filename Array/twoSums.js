array = [2, 6, 5, 8, 9, 1];
target = 17;


const twosum = (array, target) => {
  let obj = {};  // To store previously seen numbers and their indices

  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i]; // 17 - 2 = 15 , 17 - 6 = 11, 17 - 8 = 9
    console.log(diff, "s")

    if (diff in obj) { // 15 ? obj
      return [obj[diff], i];  // Found a pair: return indices // {15, 2}, {11, 6}
    } else {
      obj[array[i]] = i;  // Store current number and its index // 2 , 6
    }
    // console.log(obj)
  }
  return []
}

const twoSums = (array, target) => {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const diff = target - array[i];

    if (diff in obj) {
      return [obj[diff], i];
    }

    if (!(array[i] in obj)) {
      obj[array[i]] = i;
    }
  }

  return [];
};

console.log(twosum(array, target))