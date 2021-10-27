/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  let lo = 0;
  let hi = x + 1;

  while (lo < hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;
    if (mid * mid > x) hi = mid;
    else lo = mid + 1;
  }

  return hi - 1;
}
// @lc code=end
