export function addTwoDigits(n: any): number {
  const nums = n.toString().split("");

  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(90));
console.log(addTwoDigits(18));
console.log(addTwoDigits(27));
console.log(addTwoDigits(36));
console.log(addTwoDigits(45));
console.log(addTwoDigits(54));
console.log(addTwoDigits(63));
console.log(addTwoDigits(72));
console.log(addTwoDigits(81));
console.log(addTwoDigits(90));
