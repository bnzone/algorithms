function firstNonRepeatingCharacter(string) {
	const hash = {};
	for (let char of string) {
		hash[char] = (hash[char] || 0) + 1;
	}

	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (hash[char] === 1) return i;
	}
	return -1;
}
