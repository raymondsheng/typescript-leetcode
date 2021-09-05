/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  const minCoins = new Array(amount + 1).fill(Infinity);
  minCoins[0] = 0;

  // does not matter if you loop through coins or amount first
  coins.forEach((coin) => {
    for (let amt = coin; amt <= amount; amt++) {
      minCoins[amt] = Math.min(minCoins[amt], 1 + minCoins[amt - coin]);
    }
  });

  return minCoins[amount] === Infinity ? -1 : minCoins[amount];
}
// @lc code=end
