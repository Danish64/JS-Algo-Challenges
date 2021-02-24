export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const Board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  const cell1Sum = Board[cell1[0]] + parseInt(cell1[1]);
  const cell2Sum = Board[cell2[0]] + parseInt(cell2[1]);

  if (cell1Sum % 2 === 0 && cell2Sum % 2 === 0) {
    return true;
  } else if (cell1Sum % 2 !== 0 && cell2Sum % 2 !== 0) {
    return true;
  }

  return false;
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));
