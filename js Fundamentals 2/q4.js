//Q4. Extracting Parts of Matched Text Using Groups
function extractDateComponents(pattern, str) {
  const regex = new RegExp(pattern);
  const match = regex.exec(str);

  if (match) {
    return {
      day: match[1],
      month: match[2],
      year: match[3],
    };
  } else {
    return null;
  }
}

// Test case
const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
const testDate = "Today's date is 05-11-2024.";

console.log(extractDateComponents(datePattern, testDate));
// Output: { day: '05', month: '11', year: '2024' }
