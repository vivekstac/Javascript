const array = [{
    "name": "A",
    "salary": 100
}, {
    "name": "B",
    "salary": 500
}, {
    "name": "C",
    "salary": 300
}]

function findSecondHighestSal(arr) {
    if (arr.length <= 1) return arr[0];
    const sortedArr = arr.sort((a, b) => b["salary"] - a["salary"])
    return sortedArr[1]
}

console.log(findSecondHighestSal(array))


function findSecondHighestSal(arr) {
    const uniqueSalaries = [...new Set(arr.map(i => i.salary))];

    if (uniqueSalaries.length < 2) return null; // no second highest

    uniqueSalaries.sort((a, b) => b - a);

    const secondHighest = uniqueSalaries[1];

    return arr.find(item => item.salary === secondHighest);
}

console.log(findSecondHighestSal(array));

function add(arr) {
    let result = [];

    for (let { salary } of arr) {
        if (!result.includes(salary)) {
            result.push(salary);
        }
    }

    // sort descending (simple bubble sort)
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j] < result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }

    return result;
}

