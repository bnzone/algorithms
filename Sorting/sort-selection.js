const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallest] > array[j]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      let temp = array[i];
      array[i] = array[smallest];
      array[smallest] = temp;
    }
  }
  return array;
};

console.log(
  selectionSort([3, 2, 1, 0, 0, 2, 32, 32, 45, 77, 445, 4, 5, 6, 7, 8, 2, 1])
);
