/* Reverse words in a sentence but not the sentence 
  'The sky is blue' -> 'ehT yks si eulb'
*/

const rev = (str) => {
	const words = str.split(" ");
	const reversedWords = words.map((w) => w.split("").reverse().join(""));
	return reversedWords.join(" ");
};

const s = "Hello, my name is Igor";
const s1 = "The sky is blue";
console.log(rev(s)); // ',olleH ym eman si rogI'
console.log(rev(s1)); // 'ehT yks si eulb'
