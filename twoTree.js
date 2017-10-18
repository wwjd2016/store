let arr = [2, 3, 4, 1];

const BinaryTree = {
  root: null,
  initTree: function(arr) {
    arr.map(item => {
      this.insert(item);
    })
  },
  insert: function(key) {
    var newNode = {
      key: key,
      left: null,
      right: null
    }
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  },
  insertNode: function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
}

BinaryTree.initTree(arr);
console.log(BinaryTree.root);