export function characterParity(symbol: string): string {
  if (isNaN(symbol)) {
    return "not a digit";
  }
  if (parseInt(symbol) % 2 === 0) {
    return "even";
  }
  return "odd";
}

console.log(characterParity("q"));
console.log(characterParity("5"));
console.log(characterParity("8"));
