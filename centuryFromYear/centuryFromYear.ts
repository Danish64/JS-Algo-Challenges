export function centuryFromYear(year: number): number {
  let century: number = 1;

  if (Math.floor(year % 100) === 0) {
    century = Math.floor(year / 100);
  } else {
    century = Math.floor(year / 100) + 1;
  }

  return century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1995));
