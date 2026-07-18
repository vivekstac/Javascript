const str = "Hellow";

let result = "";
for (let i = 0; i < str.length; i++) {
    result += str[i];
    console.log(result.split("").join(" "));
}
// H
// H e
// H e l
// H e l l
// H e l l o
// H e l l o w