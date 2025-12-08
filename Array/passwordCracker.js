// First Approach

function passwordCracker(passwords, attempt) {
    let passObj = {};    // to avoid re-checking failed prefixes

    function solve(s) {
        if (s.length === 0) return [];  // success: return empty sequence

        if (passObj[s] === false) return false;  // already known impossible

        function myStartsWith(text, word) {
            if (word.length > text.length) return false;

            for (let i = 0; i < word.length; i++) {
                if (text[i] !== word[i]) return false;
            }
            return true;
        }


        for (let pw of passwords) {
            if (myStartsWith(s, pw)) {
                let rest = solve(s.slice(pw.length));
                if (rest !== false) {
                    return [pw, ...rest];   // build sequence
                }
            }
        }

        passObj[s] = false;   // mark as impossible
        return false;
    }

    const result = solve(attempt);
    return result ? result.join(" ") : "WRONG PASSWORD";
}

console.log(passwordCracker(['because', 'can', 'do', 'must', 'we', 'what'], "wedowhatwemustbecausewecan"))

console.log("Try programiz.pro");


// First approach
function passwordCracker(passwords, loginAttempt) {
    // Write your code here
    let result = [];

    while (loginAttempt.length > 0) {
        let found = false;

        for (let word of passwords) {
            let matched = true;

            for (let i = 0; i < word.length; i++) {
                if (loginAttempt[i] !== word[i]) {
                    matched = false;
                    break;
                }
            }

            if (matched) {
                result.push(word)
                loginAttempt = loginAttempt.slice(word.length)
                found = true;
                break;
            }
        }


        if (!found) break;
    }
    console.log(loginAttempt)
    console.log(result)

    return loginAttempt ? "WRONG PASSWORD" : result.join(" ")

}

function passwordCracker(passwords, loginAttempt) {
    let stack = [{ text: loginAttempt, result: [] }];
    let memo = [];

    while (stack.length > 0) {
        let { text, result } = stack.pop();

        if (text.length === 0) {
            return result.join(" ");
        }

        if (memo.includes(text)) {
            continue;
        }

        let foundAny = false;

        for (let word of passwords) {
            let matched = true;

            if (text.length >= word.length) {
                for (let i = 0; i < word.length; i++) {
                    if (text[i] !== word[i]) {
                        matched = false;
                        break;
                    }
                }
            } else {
                matched = false;
            }

            if (matched) {
                foundAny = true;
                stack.push({
                    text: text.slice(word.length),
                    result: [...result, word]
                });
            }
        }

        if (!foundAny) {
            memo.push(text);
        }
    }

    return "WRONG PASSWORD";
}


// last submission

function passwordCracker(passwords, loginAttempt) {
    // Write your code here
    let passObj = {};

    function pwdMatch(p) {
        if (p.length === 0) return [];

        if (passObj[p] === false) return false;

        for (let word of passwords) {
            if (p.startsWith(word)) {
                let rest = pwdMatch(p.slice(word.length))
                if (rest !== false) {
                    return [word, ...rest]
                }
            }
        }

        passObj[p] = false;
        return false;
    }

    let result = pwdMatch(loginAttempt)

    return result ? result.join(" ") : "WRONG PASSWORD"

}