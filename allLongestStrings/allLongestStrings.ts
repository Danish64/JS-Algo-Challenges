export function allLongestStrings(inputArray: string[]): string[] {
  let longestStringLength = 0;

  inputArray.forEach((str: string) => {
    longestStringLength =
      str.length > longestStringLength ? str.length : longestStringLength;
  });

  return inputArray.filter((str) => str.length === longestStringLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
