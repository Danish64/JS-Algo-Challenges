export function circleOfNumbers(firstNumber: number, n: number): number {
  let circleNumbers = [];
  const halfWay = n / 2;

  for (let i = 0; i < n; i++) {
    circleNumbers.push(i);
  }

  if (firstNumber < halfWay) {
    return circleNumbers[firstNumber + halfWay];
  }

  return circleNumbers[firstNumber - halfWay];
}

console.log(circleOfNumbers(6, 10));
