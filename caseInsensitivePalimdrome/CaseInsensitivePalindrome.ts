export function caseInsensitivePalindrome(inputString: string): boolean {
  const lowerCaseString = inputString.toLowerCase();

  const reversedArray = lowerCaseString.split("").reverse();

  if (reversedArray.join("") === lowerCaseString) {
    return true;
  }

  return false;
}

console.log(caseInsensitivePalindrome("AaBaa"));
console.log(caseInsensitivePalindrome("acbdo"));
