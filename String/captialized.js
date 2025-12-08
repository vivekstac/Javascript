const string = "i am a fullstack developer";

function capitalize(str) {
    let result = ""
    let strArr = str.split(" ");

    for (let i = 0; i < strArr.length; i++) {
        result += strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();

        if (i < strArr.length - 1) {
            result += " "
        }
    }

    return result
}

console.log(capitalize(string))