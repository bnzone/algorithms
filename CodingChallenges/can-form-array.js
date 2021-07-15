//https://leetcode.com/problems/check-array-formation-through-concatenation/

var canFormArray = function (arr, pieces) {
  const obj = {};
  let result = [];

  for (let i = 0; i < pieces.length; i++) {
    let key = pieces[i][0];
    obj[key] = pieces[i];
  }

  for (let num of arr) {
    if (obj[num]) result.push(...obj[num]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== result[i]) {
      return false;
    }
  }
  return true;
};

console.log(
  canFormArray([
    [91, 4, 64, 78],
    [[78], [4, 64], [91]]
  ])
);
