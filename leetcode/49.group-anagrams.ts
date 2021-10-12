/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const ans: { [charCountStr: string]: string[] } = {};

  for (const s of strs) {
    const charCount = Array.from({ length: 26 }, () => 0);
    for (const ch of s) {
      charCount[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const charCountStr = charCount.toString();
    if (charCountStr in ans) {
      ans[charCountStr].push(s);
    } else {
      ans[charCountStr] = [s];
    }
  }

  return Object.values(ans);
}
// @lc code=end
