export function add(...args: number[]): number {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
  });
  return sum;
}

console.log(add(1, 2));
console.log(add(3, 5));
console.log(add(2, 6));
console.log(add(9, 10));
console.log(add(14, 22));
