const number = 98219212723;

function largeNum(num) {
    let numStr = num + '';
    let obj = {}
    let result = 0;
    for(let n of numStr) {
        if(n > result) {
            result = n;
        }
    }

    return result
}

console.log(largeNum(number))