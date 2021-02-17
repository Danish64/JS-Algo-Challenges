export function arrayPreviousLess(items: number[]): number[] {
  let arrayWithReplacedElements: number[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    arrayWithReplacedElements.unshift(
      previousLess(items.slice(0, i), items[i])
    );
  }

  return arrayWithReplacedElements;
}

function previousLess(items: number[], num: number): number {
  let previousLess = -1;

  for (let i = items.length - 1; i >= 0; i--) {
    if (num > items[i]) {
      previousLess = items[i];
      break;
    }
  }

  return previousLess;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
