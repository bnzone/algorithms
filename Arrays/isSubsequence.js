// Give two non-empty arrays of numbers return true if a given sequence of numbers
//  is a subsequence of the main array

function isValidSubsequence(array, sequence) {
	let j = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[j]) {
			j++;
		}
		if (j === sequence.length) {
			return true;
		}
	}
	return false;
}
