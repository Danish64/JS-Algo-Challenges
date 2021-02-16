export function arrayConversion(inputArray: number[]): number {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }

  return inputArray[0];
}

function sumProduct(array: number[], isOdd: boolean): number[] {
  const sumProduct: number[] = [];

  if (isOdd) {
    for (let i = 0; i < array.length - 1; i += 2) {
      sumProduct.push(array[i] + array[i + 1]);
    }
  } else {
    for (let i = 0; i < array.length - 1; i += 2) {
      sumProduct.push(array[i] * array[i + 1]);
    }
  }

  console.log(sumProduct);

  return sumProduct;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
