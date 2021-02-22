export function characterParity(symbol: string): string {
  const result = parseInt(symbol);

  return isNaN(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}

console.log(characterParity("q"));
console.log(characterParity("5"));
console.log(characterParity("8"));
