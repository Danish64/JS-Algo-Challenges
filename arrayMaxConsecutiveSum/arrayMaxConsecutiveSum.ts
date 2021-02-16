export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let maxSum = 0;
  let slicedArray: number[] = [];
  let elementSum: number = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    slicedArray = inputArray.slice(i, i + k);

    elementSum = slicedArray.reduce((a, b) => a + b, 0);
    //   console.log(elementSum)
    if (maxSum < elementSum) {
      maxSum = elementSum;
    }
  }

  return maxSum;

  //   Other Implementation
  // let sum = 0;
  // let max = 0;
  // for (let i = 0; i < k; i++) {
  //   console.log(inputArray[i]);
  //   sum += inputArray[i];
  // }
  // console.log(sum);

  // max = sum;

  // for (let i = k; i < inputArray.length; i++) {
  //   sum -= inputArray[i - k];

  //   sum += inputArray[i];

  //   if (sum > max) {
  //     max = sum;
  //   }
  // }

  // return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
