let board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function solve(b) {
  if (!b.length) return false;
  if (!findEmptySquare(b)) return true;

  let [r, c] = findEmptySquare(b);

  for (let i = 1; i <= 9; i++) {
    if (isValid(b, i, [r, c])) {
      b[r][c] = i;
      if (solve(b)) return true;
      b[r][c] = 0;
    }
  }
  return false;
}

function isValid(board, value, emptyCoords) {
  // Location of an empty square
  let [row, col] = emptyCoords;

  // Checking rows
  for (let i = 0; i < board[0].length; i++) {
    if (board[row][i] === value && col !== i) return false;
  }
  // Checking columns
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === value && row !== i) return false;
  }
  // Checking small 3x3 boxes:

  // Finding the location of the box

  let x = Math.floor(col / 3);
  let y = Math.floor(row / 3);

  // Looping through the box to check for duplicates

  for (let i = y * 3; i < y * 3 + 3; i++) {
    for (let j = x * 3; j < x * 3 + 3; j++) {
      if (board[i][j] === value && i !== row && j !== col) return false;
    }
  }
  return true;
}

function findEmptySquare(bo) {
  for (let i = 0; i < bo.length; i++) {
    for (let j = 0; j < bo[i].length; j++) {
      if (bo[i][j] === 0) return [i, j];
    }
  }
  return undefined;
}

solve(board);
console.log(board);

[
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
