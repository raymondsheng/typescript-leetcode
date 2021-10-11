/*
 * @lc app=leetcode id=351 lang=typescript
 *
 * [351] Android Unlock Patterns
 */

// @lc code=start
function numberOfPatterns(m: number, n: number): number {
  const center = {
    "1,3": 2,
    "1,7": 4,
    "1,9": 5,
    "2,8": 5,
    "3,7": 5,
    "3,9": 6,
    "4,6": 5,
    "7,9": 8,
  };

  let count = 0;
  const visited = new Set();

  for (let curr = 1; curr < 10; curr++) {
    visited.add(curr);
    backtrack(curr);
    visited.delete(curr);
  }

  function backtrack(curr: number) {
    if (m <= visited.size && visited.size <= n) count++;
    if (visited.size === n) return;

    for (let next = 1; next < 10; next++) {
      if (visited.has(next)) continue;
      const edge = [Math.min(curr, next), Math.max(curr, next)].toString();
      if (!(edge in center) || visited.has(center[edge])) {
        visited.add(next);
        backtrack(next);
        visited.delete(next);
      }
    }
  }

  return count;
}
// @lc code=end
