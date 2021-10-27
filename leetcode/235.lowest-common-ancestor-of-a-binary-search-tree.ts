/*
 * @lc app=leetcode id=235 lang=typescript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

//  Definition for a binary tree node.
// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
// @ts-ignore
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const pVal = p.val;
  const qVal = q.val;

  while (root) {
    const rootVal = root.val;
    if (rootVal > pVal && rootVal > qVal) root = root.left;
    else if (rootVal < pVal && rootVal < qVal) root = root.right;
    else return root;
  }
  return root;
}
// @lc code=end
