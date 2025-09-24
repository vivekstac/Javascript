const number = 234324367992;

function numberCount(num) {
    let numStr = "" + num
    let numberObj =  {};
    for(let n of numStr) {
        if(numberObj[n] !== " ") {
            numberObj[n] = (numberObj[n] || 0) + 1;
        }
    }

    return numberObj;
}

console.log(numberCount(number))

function numberCountTargt(num, target) {
    let numStr = "" + num
    let numberObj =  {};
    for(let n of numStr) {
        if(numberObj[n] !== " ") {
            numberObj[n] = (numberObj[n] || 0) + 1;
        }
    }

    if(numberObj[target]) {
        return numberObj[target]
    }
    return numberObj;
}

console.log(numberCountTargt(number, ""))
