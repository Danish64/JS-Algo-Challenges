export function adjacentElementsProduct(array: number[]): number {
  let largestProduct = array[0] * array[1];

  for (let i = 1; i < array.length - 1; i++) {
    let adjacentProduct = array[i] * array[i + 1];
    if (adjacentProduct > largestProduct) {
      largestProduct = adjacentProduct;
    }
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
