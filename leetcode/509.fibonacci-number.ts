/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
  if (n === 0 || n === 1) return n;

  let [prev, curr] = [0, 1];

  for (let i = 2; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return curr;
}
// @lc code=end
