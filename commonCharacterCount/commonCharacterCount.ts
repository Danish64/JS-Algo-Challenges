export function commonCharacterCount(s1: string, s2: string): number {
  let count = 0;

  const s1CharCount = getWordCount(s1.split(""));
  const s2CharCount = getWordCount(s2.split(""));

  for (let prop in s1CharCount) {
    if (s2CharCount.hasOwnProperty(prop)) {
      if (s2CharCount[prop] < s1CharCount[prop]) {
        count += s2CharCount[prop];
      } else {
        count += s1CharCount[prop];
      }
    }
  }

  return count;
}

function getWordCount(chars: string[]): object {
  const wordCount = {};

  for (let i = 0; i < chars.length; i++) {
    if (wordCount.hasOwnProperty(chars[i])) {
      wordCount[chars[i]]++;
    } else {
      wordCount[chars[i]] = 1;
    }
  }
  return wordCount;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
