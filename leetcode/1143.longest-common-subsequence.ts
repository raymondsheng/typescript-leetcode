/*
 * @lc app=leetcode id=1143 lang=typescript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const [len1, len2] = [text1.length, text2.length];
  const minLen = len1 < len2 ? len1 : len2;
  const maxLen = len1 > len2 ? len1 : len2;
  const minWord = minLen === text1.length ? text1 : text2;
  const maxWord = minWord === text1 ? text2 : text1;

  const dp: number[][] = Array.from({ length: 2 }, (e) =>
    Array(minLen + 1).fill(0)
  );
  for (let i = 1; i <= maxLen; i++) {
    const currRow = i % 2;
    const prevRow = (i - 1) % 2;
    for (let j = 1; j <= minLen; j++) {
      if (maxWord[i - 1] === minWord[j - 1])
        dp[currRow][j] = dp[prevRow][j - 1] + 1;
      else dp[currRow][j] = Math.max(dp[currRow][j - 1], dp[prevRow][j]);
    }
  }
  return dp[maxLen % 2][minLen];
}

// @lc code=end
