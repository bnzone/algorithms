// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  var swapped;
  for (var i = arr.length; i > 0; i--) {
    swapped = false;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
