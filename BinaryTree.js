let arr = [8, 7, 6, 4, 3, 9, 10, 15, 11];

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
  },
  inOrderTraverse: function(callback) {
    var inOrderTraverseNode = function(node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    }
    inOrderTraverseNode(this.root, callback)
  },
  preOrderTraverse: function(callback) {
    var preOrderTraverseNode = function(node, callback) {
      if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    }
    preOrderTraverseNode(this.root, callback)
  },
  postOrderTraverse: function(callback) {
    var postOrderTraverseNode = function(node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    }
    postOrderTraverseNode(this.root, callback)
  }
}

BinaryTree.initTree(arr);
console.log(BinaryTree.root)
// 中序遍历
BinaryTree.inOrderTraverse((key) => {console.log(key)});
// 前序遍历
// BinaryTree.preOrderTraverse((key) => {console.log(key)});
// 后序遍历
// BinaryTree.postOrderTraverse((key) => {console.log(key)});
