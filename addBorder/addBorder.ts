export function addBorder(array: string[]): string[] {
  let wall = "*".repeat(array[0].length + 2);

  for (let i = 0; i < array.length; i++) {
    array[i] = "*".concat(array[i], "*");
  }

  array.unshift(wall);
  array.push(wall);

  return array;
}

console.log(addBorder(["abc", "def"]));
