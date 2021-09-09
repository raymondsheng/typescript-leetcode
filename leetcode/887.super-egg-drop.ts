/*
 * @lc app=leetcode id=887 lang=typescript
 *
 * [887] Super Egg Drop
 */

// @lc code=start
function superEggDrop(k: number, n: number): number {
  const memo: { string?: number } = {};

  function dp(eggs: number, floors: number): number {
    if (eggs === 1) return floors;
    if (floors === 0) return 0;
    const input = `(${eggs}, ${floors})`;
    if (input in memo) return memo[input];

    let res = Infinity;
    let [lo, hi] = [1, floors];
    while (lo <= hi) {
      const mid = Math.floor(lo + (hi - lo) / 2);
      const broken = dp(eggs - 1, mid - 1);
      const notBroken = dp(eggs, floors - mid);
      if (broken > notBroken) {
        hi = mid - 1;
        res = Math.min(res, broken + 1);
      } else if (notBroken > broken) {
        lo = mid + 1;
        res = Math.min(res, notBroken + 1);
      } else {
        res = broken + 1;
        break;
      }
    }
    memo[input] = res;
    return res;
  }

  return dp(k, n);
}
// @lc code=end
