export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  return yourLeft + yourRight === friendsLeft + friendsRight;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(10, 15, 15, 9));
console.log(areEquallyStrong(10, 15, 15, 10));
