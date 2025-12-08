const string = "Pass1as32";

function passwordValidate(str) {
    const numbers = "0123456789";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special = "@#$%!&^";

    if (str.length < 8) return false;

    let isNum = false;
    let isUpper = false;
    let isSymbol = false;

    for (let char of str) {
        if (numbers.includes(char)) {
            isNum = true;
        }
        if (upperCase.includes(char)) {
            isUpper = true;
        }
        if (special.includes(char)) {
            isSymbol = true;
        }
    }

    return isNum && isUpper && isSymbol;
}

console.log(passwordValidate(string));


function passwordValidate(str) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!&^]).{8,}$/;
    return regex.test(str);
}

console.log(passwordValidate("Pass1@as"));
