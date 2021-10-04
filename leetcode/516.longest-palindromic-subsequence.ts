/*
 * @lc app=leetcode id=516 lang=typescript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
  const n = s.length;

  const dp: number[][] = Array.from({ length: n }, (e, i) =>
    Array.from({ length: n }, (e, j) => {
      if (i === j) return 1;
      else return 0;
    })
  );

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }

  return dp[0][n - 1];
}
// @lc code=end
