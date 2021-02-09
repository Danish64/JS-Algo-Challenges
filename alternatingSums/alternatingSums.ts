export function alternatingSums(a: number[]): number[] {
  let team1Weight: number = a[0];
  let team2Weight: number = a[1];

  for (let i = 2; i < a.length; i++) {
    if (i % 2 === 0) {
      team1Weight = team1Weight + a[i];
    } else {
      team2Weight = team2Weight + a[i];
    }
  }

  return [team1Weight, team2Weight];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
