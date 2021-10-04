/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  const memo: { [index: string]: boolean } = {};

  function dp(sIdx: number, pIdx: number): boolean {
    const input: string = [sIdx, pIdx].toString();
    if (input in memo) return memo[input];

    if (pIdx === p.length) return sIdx === s.length;

    const firstMatch = sIdx < s.length && [".", s[sIdx]].includes(p[pIdx]);

    let ret: boolean;

    if (pIdx <= p.length - 2 && p[pIdx + 1] === "*") {
      ret = (firstMatch && dp(sIdx + 1, pIdx)) || dp(sIdx, pIdx + 2);
    } else {
      ret = firstMatch && dp(sIdx + 1, pIdx + 1);
    }
    memo[input] = ret;
    return ret;
  }

  return dp(0, 0);
}
// @lc code=end
