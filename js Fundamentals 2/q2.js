//Q2. Basic Usage of Regular Expressions
function isMatch(pattern, str) {
  const regex = new RegExp(pattern);
  return regex.test(str);
}

// Test cases
console.log(isMatch("hello", "hello world")); // Output: true
console.log(isMatch("^world", "hello world")); // Output: false
console.log(isMatch("\\d+", "Year 2023")); // Output: true
console.log(isMatch("bye", "hello world")); // Output: false
