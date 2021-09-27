/* Rotate a string using offset
  'apple' rorated once -> 'eappl'
  'apple' rotated twice -> 'leapp'
*/

const rotateStr = (str, offset) => {
	if (offset > str.length) return undefined;
	return str.slice(str.length - offset) + str.slice(0, str.length - offset);
};

console.log(rotateStr("apple", 1)); // eappl
console.log(rotateStr("apple", 2)); // leapp
console.log(rotateStr("hello", 1)); // ohell
console.log(rotateStr("banana", 4)); // nanaba
console.log(rotateStr("kiwi", 9)); // undefined
