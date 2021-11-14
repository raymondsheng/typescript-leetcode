/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  let [lo, hi] = [1, Math.max(...piles)];

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (isFeasible(mid, h, piles)) hi = mid;
    else lo = mid + 1;
  }

  return lo;
}

function isFeasible(mid: number, h: number, piles: number[]): boolean {
  return piles.reduce((pv, cv) => pv + Math.ceil(cv / mid), 0) <= h;
}
// @lc code=end
