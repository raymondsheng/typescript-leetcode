/*
 * @lc app=leetcode id=1011 lang=typescript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
function shipWithinDays(weights: number[], days: number): number {
  function isFeasible(capacity: number): boolean {
    let D = 1;
    let total = 0;

    for (const weight of weights) {
      total += weight;
      if (total > capacity) {
        total = weight;
        D++;
        if (D > days) return false;
      }
    }
    return true;
  }

  let [lo, hi] = [
    Math.max(...weights),
    weights.reduce((prev, curr) => prev + curr),
  ];

  while (lo < hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;
    if (isFeasible(mid)) hi = mid;
    else lo = mid + 1;
  }

  return lo;
}
// @lc code=end
