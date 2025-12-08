const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test("test@gmail.com"));   // true
console.log(emailRegex.test("test..@gmail.com")); // false
console.log(emailRegex.test("test@ gmail.com"));  // false
console.log(emailRegex.test("test@gmail"));       // false

// Referance
/* 
^ start, $ end
. any char (no newline unless s)
[] character set, [^] negation
\d \w \s shorthand classes
+ * ? {m,n} quantifiers
() capture, (?:) no-capture
| alternation
(?= ) lookahead, (?<= ) lookbehind
i g m s u y flags 


Digits: \d+ — one or more digits.
Integer (opt. sign): ^[+-]?\d+$
Decimal number: ^[+-]?(\d+|\d+\.\d+|\.\d+)$
Email (simple): ^[^\s@]+@[^\s@]+\.[^\s@]+$ — practical, not perfect.
URL (very simple): ^https?:\/\/[^\s/$.?#].[^\s]*$ — again practical but imperfect.
HTML tag: <([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1> — demonstrates capturing and backreference \1.
Password (your earlier rule):
^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!&^]).{8,}$
*/

// test
const rx = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!&^]).{8,}$/;
console.log(rx.test("Pass1@as")); // true

// find all words
const words = "one two three".match(/\w+/g); // ["one","two","three"]

// extract with groups
const m = /(\d{4})-(\d{2})-(\d{2})/.exec("2025-11-20");
if (m) {
    console.log(m[1], m[2], m[3]); // "2025" "11" "20"
}

// replace
"1,2,3".replace(/,/, ";");   // "1;2,3"
"1,2,3".replace(/,/g, ";");  // "1;2;3"
