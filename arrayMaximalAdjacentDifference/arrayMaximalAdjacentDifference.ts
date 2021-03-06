export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxAdjDiff = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 1; i < inputArray.length - 1; i++) {
    let absoluteDiff = Math.abs(inputArray[i] - inputArray[i + 1]);
    maxAdjDiff = maxAdjDiff < absoluteDiff ? absoluteDiff : maxAdjDiff;
    // if (maxAdjDiff < absoluteDiff) {
    //   maxAdjDiff = absoluteDiff;
    // }
  }

  return maxAdjDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
