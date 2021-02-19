export function boxBlur(image: number[][]): number[][] {
  const average: number = 0;

  return [[average]];
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
