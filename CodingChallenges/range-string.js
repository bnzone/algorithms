// please complete the challenge according to the instructions
function solution(array) {
  const result = [];
  let j;

  for (let i = 0; i < array.length; i = j + 1) {
    // beginning of range or single
    result.push(array[i]);
    // find end of range
    for (j = i + 1; j < array.length && array[j] === array[j - 1] + 1; j++);
    j--;

    if (i == j) {
      // single number
      result.push(',');
    } else if (i + 1 == j) {
      // two numbers
      result.push(',', array[j], ',');
    } else {
      // range
      result.push('-', array[j], ',');
    }
  }
  result.pop(); // remove trailing comma
  return result.join('');
}

solution([
  -6,
  -3,
  -2,
  -1,
  0,
  1,
  3,
  4,
  5,
  7,
  8,
  9,
  10,
  11,
  14,
  15,
  17,
  18,
  19,
  20
]);
solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
