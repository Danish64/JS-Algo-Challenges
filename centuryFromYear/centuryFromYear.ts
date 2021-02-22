export function centuryFromYear(year: number): number {
  let century: number = year / 100;

  if (year % 100 === 0) {
    return century;
  }

  return Math.floor(century) + 1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
// console.log(centuryFromYear(1995));
