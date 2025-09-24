function intToRoman(num) {
  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4,
    1
  ];
  
  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV",
    "I"
  ];
  
  let roman = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      roman += symbols[i];
      num -= values[i];
    }
  }

  return roman;
}

// ✅ Examples
console.log(intToRoman(3));     // "III"
console.log(intToRoman(58));    // "LVIII"  (50 + 5 + 3)
console.log(intToRoman(1994));  // "MCMXCIV" (1000 + 900 + 90 + 4)