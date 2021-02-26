export function chunkyMonkey(inputArray: any[], length: number): any[][] {
  let splittedArrays = [];
  let i = 0;
  while (i < inputArray.length) {
    splittedArrays.push(inputArray.slice(i, (i += length)));
  }
  function printNumber(num) {
    console.log(num);
  }

  return splittedArrays;
}

console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
console.log(chunkyMonkey(["a", "b", "c", "d", "e", "f"], 2));
