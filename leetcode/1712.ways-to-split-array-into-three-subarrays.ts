/*
 * @lc app=leetcode id=1712 lang=typescript
 *
 * [1712] Ways to Split Array Into Three Subarrays
 */

// @lc code=start
function waysToSplit(nums: number[]): number {
  const mod = 1_000_000_007;

  const prefixArray = Array.from({ length: nums.length + 1 }, () => 0);

  for (let i = 1; i < prefixArray.length; i++) {
    prefixArray[i] = prefixArray[i - 1] + nums[i - 1];
  }

  let [ans, j, k] = [0, 0, 0];

  for (let i = 1; i < prefixArray.length - 2; i++) {
    j = Math.max(i + 1, j);
    while (
      j < prefixArray.length - 1 &&
      // middle array smaller than left move left pointer
      prefixArray[j] - prefixArray[i] < prefixArray[i]
    ) {
      j++;
    }
    k = Math.max(j, k);
    while (
      k < prefixArray.length - 1 &&
      // right array greater than equal to middle array move right pointer
      prefixArray.slice(-1)[0] - prefixArray[k] >=
        prefixArray[k] - prefixArray[i]
    ) {
      k++;
    }
    // i inclusive to left array,
    // j inclusive to middle array
    // k exclusive to middle array (b/c keep incrementing until k out of middle array bounds)
    ans += k - j;
  }

  return ans % mod;
}
// @lc code=end
