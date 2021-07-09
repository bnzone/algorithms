//ttps://projecteuler.net/problem=40

let arr = Array.from({ length: 1000000 }, (_, i) => i + 1);

let string = '';
for (let num of arr) {
  string = string.concat(num.toString());
}
console.log(
  parseInt(string[0]) *
    parseInt(string[9]) *
    parseInt(string[99]) *
    parseInt(string[999]) *
    parseInt(string[9999]) *
    parseInt(string[99999]) *
    parseInt(string[999999])
);
