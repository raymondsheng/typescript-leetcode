/*
 * @lc app=leetcode id=72 lang=typescript
 *
 * [72] Edit Distance
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  const [len1, len2] = [word1.length, word2.length];
  const minLen = len1 < len2 ? len1 : len2;
  const maxLen = len1 > len2 ? len1 : len2;
  const minWord = minLen === word1.length ? word1 : word2;
  const maxWord = minWord === word1 ? word2 : word1;

  const dp: number[][] = Array.from({ length: 2 }, (e) =>
    Array(minLen + 1).fill(0)
  );
  for (let i = 0; i <= minLen; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= maxLen; i++) {
    const currRow = i % 2;
    const prevRow = (i - 1) % 2;
    for (let j = 0; j <= minLen; j++) {
      if (j === 0) {
        dp[currRow][j] = i;
      } else if (maxWord[i - 1] === minWord[j - 1]) {
        dp[currRow][j] = dp[prevRow][j - 1];
      } else {
        dp[currRow][j] =
          1 +
          Math.min(
            dp[prevRow][j], // delete
            dp[currRow][j - 1], // insert
            dp[prevRow][j - 1] // replace
          );
      }
    }
  }
  return dp[maxLen % 2][minLen];
}
// @lc code=end
