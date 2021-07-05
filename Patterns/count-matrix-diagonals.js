function sum_up_diagonals(matrix) {
  const levels = matrix.length;
  let result = 0;

  let i = 0;
  let j = levels;

  let k = levels - 1;
  let l = 0;

  while (i < j) {
    result = result + matrix[i][i];
    i++;
  }

  while (l < levels) {
    result = result + matrix[l][k];
    l++;
    k--;
  }

  return result;
}

list1 = [
  [1, 2],
  [3, 4]
];

list2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

list3 = [
  [4, 1, 0],
  [-1, -1, 0],
  [0, 0, 9]
];

list4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

console.log(sum_up_diagonals(list1)); //10
console.log(sum_up_diagonals(list2)); //30
console.log(sum_up_diagonals(list3)); //11
console.log(sum_up_diagonals(list4)); //68
