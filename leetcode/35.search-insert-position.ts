/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let [lo, hi] = [0, nums.length];
  while (lo < hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;
    if (nums[mid] >= target) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}
// @lc code=end
