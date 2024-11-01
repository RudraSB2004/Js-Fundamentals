// /Q3. Using Character Classes in Regular Expressions
function findCharacterClasses(str) {
  const digitPattern = /\d/g;
  const uppercasePattern = /[A-Z]/g;
  const lowercasePattern = /[a-z]/g;
  const specialCharPattern = /[^a-zA-Z0-9\s]/g;

  return {
    digits: str.match(digitPattern) || [],
    uppercase: str.match(uppercasePattern) || [],
    lowercase: str.match(lowercasePattern) || [],
    specialCharacters: str.match(specialCharPattern) || [],
  };
}

// Test cases
const testString = "Hello World! 2023 @#";

console.log(findCharacterClasses(testString));
// Output: {
//   digits: ['2', '0', '2', '3'],
//   uppercase: ['H', 'W'],
//   lowercase: ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd'],
//   specialCharacters: ['!', '@', '#']
// }
