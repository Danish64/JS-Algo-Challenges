export function alphabeticShift(inputStr: string): string {
  //   const alphabets: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  //Faster algorithm
  const alphabets: object = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "x",
    x: "y",
    y: "z",
    z: "a",
  };

  let shiftedAlphabets = inputStr.split("");
  for (let i = 0; i < shiftedAlphabets.length; i++) {
    shiftedAlphabets[i] = alphabets[shiftedAlphabets[i]];
  }

  return shiftedAlphabets.join("");
}

console.log(alphabeticShift("crazy"));
