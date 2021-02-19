export function bishopandPawn(bishop: string, pawn: string): boolean {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const boardX = board[bishop[0]];
  const boardY = parseInt(bishop[1]);
  const pawnX = board[pawn[0]];
  const pawnY = parseInt(pawn[1]);

  if (boardX + boardY === pawnX + pawnY || boardX + pawnY === pawnX + boardY) {
    return true;
  }

  return false;
}

console.log(bishopandPawn("a1", "c3"));
console.log(bishopandPawn("b1", "c3"));
console.log(bishopandPawn("d4", "g1"));
