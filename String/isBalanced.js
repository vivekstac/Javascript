//  This function that checks the opening and closing parentheses onto the stack 
// For example {} this can be true and {{{}} this can be false because one close parantheses missing

const parantheses = "{{}}";
function isBalanced(str) {
    let result = [];
    for(let item of str) {
        if(item == "{") {
            result.push("{")
        } else if(item == "}") {
            if(result == 0) {
                return false
            }
            result.pop()
        }
    }
    return result.length === 0;
}

console.log(isBalanced(parantheses))