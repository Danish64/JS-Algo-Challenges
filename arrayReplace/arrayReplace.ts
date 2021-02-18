export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substituitionElem: number
): number[] {
  inputArray.forEach((value, index) => {
    if (value === elemToReplace) {
      inputArray[index] = substituitionElem;
    }
  });

  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
