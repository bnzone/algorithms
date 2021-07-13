// Tabulation

const fib = (num) => {
  if (num <= 2) return 1;

  const fibNums = [0, 1, 1];

  for (let i = 3; i <= num; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[num];
};

console.log(fib(6));

// Recursive Approach (O 1.6^n)

const fibRecursive = (num) => {
  if (num <= 2) {
    return 1;
  }
  return fibRecursive(num - 1) + fibRecursive(num - 2);
};

// console.log(fibRecursive(45));

// Dynamic Programming Approach

const fibDP = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};

console.log(fibDP(20), 'DP');
