function validParens(str) {
	const map = {
		"(": ")",
		"{": "}",
		"[": "]"
	};

	const stack = [];

	for (let element of str) {
		if (map[element]) {
			stack.push(element);
		} else {
			let popped = stack.pop();
			if (map[popped] !== element) {
				return false;
			}
		}
	}

	if (stack.length) return false;

	return true;
}
