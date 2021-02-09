export function alphabetSubSequence(s: string): boolean {
  const chars: string[] = s.split("");
  const charValues: number[] = [];

  chars.forEach((char: string) => {
    charValues.push(char.charCodeAt(0));
  });

  console.log(new Set(charValues).size);

  console.log(charValues.length);

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubSequence("effg"));
console.log(alphabetSubSequence("bxz"));
console.log(alphabetSubSequence("ace"));
console.log(alphabetSubSequence("cdce"));
console.log(alphabetSubSequence("abccded"));
