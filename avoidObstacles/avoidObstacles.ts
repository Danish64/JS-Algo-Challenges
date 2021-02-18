export function avoidObstacles(inputArray: number[]): number {
  inputArray.sort();
  console.log(inputArray);
  let jumpNumber = inputArray[0] + 1;
  const greatestNum = inputArray[inputArray.length - 1];

  while (jumpNumber <= greatestNum) {
    if (inputArray.every((numb) => numb % jumpNumber !== 0)) {
      return jumpNumber;
    } else {
      jumpNumber++;
    }
  }

  jumpNumber = greatestNum + 1;

  return jumpNumber;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([2, 4, 5, 8, 1]));
console.log(avoidObstacles([5, 3, 6, 7, 12]));
