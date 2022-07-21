	// node for a BST
class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	// insert(val): inserts new node into a BST with value val. Returns the BST. Uses iteration, not recursion.
	insert(val) {
		// if BST is empty, set val as root Node
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}

		// else, traverse tree iteratively comparing values with < or > until null spot is found.
		let newNode = new Node(val);
		let currNode = this.root;
		while (currNode) {
			if (currNode.val > newNode.val) {
				if (!currNode.left) {
					currNode.left = newNode;
					return this;
				} else {
					currNode = currNode.left;
				}
			}
			if (currNode.val < newNode.val) {
				if (!currNode.right) {
					currNode.right = newNode;
					return this;
				} else {
					currNode = currNode.right;
				}
			}
		}
	}

	// insertRecursively(val): inserts new node into a BST with value val. Returns the BST. Uses recursion, not iteration.
	insertRecursively(val, currNode = this.root) {

		// if BST is empty, set val as root Node
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}

		// else, traverse tree recursively comparing values with < or > until null spot is found.
		if (currNode.val > val) {
			if (!currNode.left) {
				currNode.left = new Node(val);
				return this;
			} else {
				return this.insertRecursively(val, currNode.left);
			}
		}

		if (currNode.val < val) {
			if (!currNode.right) {
				currNode.right = new Node(val);
				return this;
			} else {
				return this.insertRecursively(val, currNode.right);
			}
		}

	}

	//find(val): Searches BST for a node with value val. Returns node if found, else return undefined. Uses iteration.
	find(val) {
		//if BST is empty, return undefined
		if (!this.root) return undefined;

		let currNode = this.root;
		while (currNode) {
			if (currNode.val === val) return currNode;
			if (currNode.val > val) {
				if (!currNode.left) {
					return undefined;
				} else {
					currNode = currNode.left;
				}
			}
			if (currNode.val < val) {
				if (!currNode.right) {
					return undefined;
				} else {
					currNode = currNode.right;
				}
			}
		}
	}
	// SB SOLUTION:
	// find(val) {
	// 	let currentNode = this.root;
	// 	let found = false;
	
	// 	if (val === currentNode.val) return currentNode;
	
	// 	while (currentNode && !found) {
	// 	  if (val < currentNode.val) {
	// 		currentNode = currentNode.left;
	// 	  } else if (val > currentNode.val) {
	// 		currentNode = currentNode.right;
	// 	  } else {
	// 		found = true;
	// 	  }
	// 	}
	
	// 	if (!found) return undefined;
	// 	return currentNode;
	// }

	//findRecursively(val): Searches BST for a node with value val. Returns node if found, else return undefined. Uses recursion.
	findRecursively(val, currNode = this.root) {
		// if BST is empty, return undefined
		if (!this.root) return undefined;

		//if currNode.val is sought value, return currNode
		if (currNode.val === val) return currNode;

		// else, traverse tree using < and > to find sought val
		if (currNode.val > val) {
			if (!currNode.left) {
				return undefined;
			} else {
				return this.findRecursively(val, currNode.left);
			}
		}

		if (currNode.val < val) {
			if (!currNode.right) {
				return undefined;
			} else {
				return this.findRecursively(val, currNode.left);
			}
		}
	}

	// dfsPreOrder(): Traverse BST using pre-order DFS. Return array of all visited node's values.
	dfsPreOrder() {
		let arr = []; //define array

		function traverse(curr = this.root) { //function to traverse nodes
			arr.push(curr.val); // push current value onto array
			if (curr.left) { // if a left, go left and traverse
				this.traverse(curr.left)
			}
			if (curr.right) { // if a right, go right and traverse
				this.traverse(curr.right)
			}
		}
		traverse();
		return arr;
	}

	// dfsInOrder(): Traverse BST using in-order DFS. Return array of all visited node's values.
	dfsInOrder() {
		let arr = []; //define array

		function traverse(curr = this.root) { //function to traverse nodes
			if (curr.left) { // if a left, go left and traverse
				this.traverse(curr.left)
			}
			arr.push(curr.val); // push current value onto array
			if (curr.right) { // if a right, go right and traverse
				this.traverse(curr.right)
			}
		}
		traverse();
		return arr;
	}

	// dfsPostOrder(): Traverse BST using post-order DFS. Return array of all visited node's values.
	dfsPostOrder() {
		let arr = []; //define array

		function traverse(curr = this.root) { //function to traverse nodes
			if (curr.left) { // if a left, go left and traverse
				this.traverse(curr.left)
			}
			if (curr.right) { // if a right, go right and traverse
				this.traverse(curr.right)
			}
			arr.push(curr.val); // push current value onto array
		}
		traverse();
		return arr;
	}

	// bfs(): Traverse BST using BFS. Return array of visited nodes.
	bfs() {
		let visited = [];
		let queue = [];
		let curr = this.root;

		queue.push(curr);

		while (queue.length) {
			curr = queue.shift();
			visited.push(curr.val);
			if (curr.left) queue.push(curr.left);
			if (curr.right) queue.push(curr.right);
		}
		return visited;
	}

	// remove(val): removes a node in the BST with value val. Returns removed node. Should be able to remove root node, renoval of node with 1 child, and two children.
	remove(val) {

	}

	// is Balanced(): Returns true if BST is balances, false if not.
	// SB SOLUTION:
	isBalanced(current=this.root) {
		if (current === null) return;
		return maxDepth(current) - minDepth(current) <= 1;
	
		function minDepth(current) {
		  if (current === null) return 0;
		  return 1 + Math.min(minDepth(current.left), minDepth(current.right));
		}
	
		function maxDepth(current) {
		  if (current === null) return 0;
		  return 1 + Math.max(maxDepth(current.left), maxDepth(current.right));
		}
	  }

	// findSecondHighest(): Find second highest value in BST, if exists. Otherwise return undefined.
	// SB SOLUTION:
	findSecondHighest(current = this.root) {
		// if the tree is too small, return
		if (!this.root || (!this.root.left && !this.root.right)) return;
	
		while (current) {
		  // Current is largest and has a left subtree and 2nd largest is the largest in that subtree
		  if (current.left && !current.right) {
			return this.findSecondHighest(current.left);
		  }
		  // Current is parent of largest and largest has no children so current is 2nd largest
		  if (current.right && (!current.right.left && !current.right.right)) {
			return current.val;
		  }
		  current = current.right;
		}
	  }
}

// module.exports = BinarySearchTree;
