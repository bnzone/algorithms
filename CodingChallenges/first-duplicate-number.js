// Find the first duplicate number in an array of nums from 1..n.
// You can mutate the array.

// O(n) time, O(1) space
function firstDuplicateValue(array) {
	for (let num of array) {
		let val = Math.abs(num);
		if (array[val - 1] < 0) return val;
		array[val - 1] *= -1;
	}
	return -1;
}
