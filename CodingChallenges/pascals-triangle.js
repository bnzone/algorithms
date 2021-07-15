//leetcode.com/problems/pascals-triangle/

https: var generate = function (numRows) {
  let rows = 1;

  let triangle = [[1]];

  const next = (arr) => {
    if (rows === numRows) {
      return;
    }

    let newArr = [];
    let first = arr[0];
    let last = arr[arr.length - 1];
    newArr.push(first);
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(arr[i] + arr[i + 1]);
    }
    newArr.push(last);
    triangle.push(newArr);
    rows++;
    next(newArr);
  };

  next(triangle[0]);

  return triangle;
};
