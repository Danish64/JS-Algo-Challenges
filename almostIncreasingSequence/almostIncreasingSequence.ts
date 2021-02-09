export function almostIncreasingSequence(sequence: number[]): boolean {
  let sequenceBreakCount = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      sequenceBreakCount++;
      if (
        sequence[i] >= sequence[i + 2] &&
        sequence[i - 1] >= sequence[i + 1]
      ) {
        return false;
      }
    }
  }
  return sequenceBreakCount <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([10, 30, 2, 3, 4, 5]));
console.log(almostIncreasingSequence([1, 3, 2]));
