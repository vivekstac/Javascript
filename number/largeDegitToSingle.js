function twoSin(arr) {
    // Step 1: find total sum of numbers
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    console.log(total)
    // Step 2: if sum < 10, stop
    if (total < 10) {
        return total;
    }

    const totalSting = total + ""

    // Step 3: otherwise, sum the digits of that total
    let digits = totalSting.split('').map(Number);
    return twoSin(digits); // recursive call with digits
}

const ar = [1, 42, 21, 5, 3, 5, 6, 9, 12, 323];
console.log(twoSin(ar)); // ✅ Output: single-digit sum (5)
