//  This function that checks the opening and closing parentheses onto the stack 
// For example {} this can be true and {{{}} this can be false because one close parantheses missing

const parantheses = "}{{}}{";
function isBalanced(str) {
    let result = [];
    for (let item of str) {
        if (item == "{") {
            result.push("{")
        } else if (item == "}") {
            if (result === 0) {
                return false
            }
            result.pop()
        }
    }
    return result.length === 0;
}

console.log(isBalanced(parantheses))


function isBalanced(str) {
    const stack = [];
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of str) {
        // If opening bracket → push
        if (Object.values(pairs).includes(char)) { // If it's an opening bracket
            stack.push(char); // Push opening bracket onto stack
        }
        // If closing bracket → check last opened
        else if (pairs[char]) { // If it's a closing bracket
            if (stack.pop() !== pairs[char]) return false; // Pop from stack and check if it matches the corresponding opening bracket
        }
    }

    return stack.length === 0;
}
