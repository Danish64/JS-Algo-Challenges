export function checkPalindrome(inputString: string): boolean {
  let isPalindrome = false;

  if (
    inputString.toLowerCase().split("").reverse().join("") ===
    inputString.toLowerCase()
  ) {
    isPalindrome = true;
  }

  return isPalindrome;
}

console.log(checkPalindrome("a"));
console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
