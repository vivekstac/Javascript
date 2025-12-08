const array = [{
    "id": 1,
    "user": "A",
    "amount": 120
}, {
    "id": 2,
    "user": "B",
    "amount": 200
}, {
    "id": 3,
    "user": "A",
    "amount": 90
},]

function getAmountPerUsers(arr) {
    const result = arr.reduce((acc, item) => {
        if (acc[item.user]) {
            acc[item.user] += item.amount
        } else {
            acc[item.user] = item.amount
        }

        return acc

    }, {})

    return result
}

function getAmountPerUsers(arr) {
    const result = {};

    for (let { user, amount } of arr) {
        result[user] = (result[user] || 0) + amount
    }
    return result
}

console.log(getAmountPerUsers(array))