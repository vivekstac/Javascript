function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let count = 0;
    // if(password.length < 6) return count = 6 - password.length;
    // if(n < 6) return count = n - password.length;
    let numbers = /[0-9]/;
    let lower_case = /[a-z]/;
    let upper_case = /[A-Z]/;
    let special_characters = /[!@#$%^&*()\-+]/;

    if (!numbers.test(password)) count++;
    if (!lower_case.test(password)) count++;
    if (!upper_case.test(password)) count++;
    if (!special_characters.test(password)) count++;

    return Math.max(count, 6 - password.length)

}

const stl = "AUzs-nV"
console.log(camelcase("saveRateOp"), minimumNumber(stl.length, stl))