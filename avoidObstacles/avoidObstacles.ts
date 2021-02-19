export function avoidObstacles(inputArray: number[]): number {
  inputArray.sort();
  //   console.log(inputArray);
  //   let jumpNumber = inputArray[0] + 1;
  //   const greatestNum = inputArray[inputArray.length - 1];

  //   while (jumpNumber <= greatestNum) {
  //     if (inputArray.every((numb) => numb % jumpNumber !== 0)) {
  //       return jumpNumber;
  //     } else {
  //       jumpNumber++;
  //     }
  //   }

  //   jumpNumber = greatestNum + 1;

  //   return jumpNumber;

  inputArray.sort();
  console.log(inputArray);
  const greatestValue = inputArray[inputArray.length - 1];

  for (let i = 1; i <= greatestValue + 1; i++) {
    if (i !== inputArray[i]) {
      if (inputArray.every((ele) => ele % i !== 0)) {
        return i;
      }
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([2, 4, 5, 8, 1]));
console.log(avoidObstacles([5, 3, 6, 7, 12]));
