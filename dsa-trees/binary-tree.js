/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if (!this.root) return 0
    function minDepth(node) {
      if (node.left === null && node.right === null) return 1
      if (node.left === null) return minDepth(node.right)
      if (node.right === null) return minDepth(node.left)
      return (Math.min(minDepth(node.left), minDepth(node.right)) + 1)
    }
    return minDepth(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    if (!this.root) return 0
    function maxDepth(node) {
      if (node.left === null && node.right === null) return 1
      if (node.left === null) return minDepth(node.right) + 1
      if (node.right === null) return minDepth(node.left) + 1
      return (Math.max(maxDepth(node.left), maxDepth(node.right)) + 1)
    } 
    return maxDepth(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    let result = 0;
    function getMaxSum(node) {
      if (node === null) return 0
      const leftSum = getMaxSum(node.left)
      const rightSum = getMaxSum(node.right)
      result = Math.max(result, node.val + leftSum + rightSum)
      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }
    getMaxSum(this.root)
    return result
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    if (!this.root) return null;
    let queue = [this.root]
    let closest = null
    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;
      if (higherThanLowerBound && shouldReassignClosest) closest = currentVal
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return closest
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
