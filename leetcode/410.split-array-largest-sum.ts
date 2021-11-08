/*
 * @lc app=leetcode id=410 lang=typescript
 *
 * [410] Split Array Largest Sum
 */

// @lc code=start
function splitArray(nums: number[], m: number): number {
  let [lo, hi] = [Math.max(...nums), nums.reduce((prev, curr) => prev + curr)];

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (isFeasible(nums, m, mid)) hi = mid;
    else lo = mid + 1;
  }

  return lo;
}

function isFeasible(nums: number[], m: number, mid: number): boolean {
  let total = 0;
  let subArrayCount = 1;
  for (const num of nums) {
    total += num;
    if (total > mid) {
      total = num;
      subArrayCount++;
      if (subArrayCount > m) return false;
    }
  }
  return true;
}
// @lc code=end
