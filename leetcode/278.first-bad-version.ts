/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let lo = 1;
    let hi = n;
    while (lo < hi) {
      const mid = Math.floor((hi - lo) / 2) + lo;
      if (isBadVersion(mid)) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  };
};
// @lc code=end
