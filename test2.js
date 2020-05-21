// // function FindPath(root, expectNumber) {
// //     var result = [];
// //     if (root === null) {
// //         return result;
// //     }
// //     dfsFind(root, expectNumber, [], 0, result);
// //     return result;
 
// // }
// // function dfsFind(root, expectNumber, path, currentSum, result) {
// //     currentSum += root.val;
 
// //     path.push(root.val);
 
// //     if (currentSum == expectNumber && root.left == null && root.right == null) {
// //         result.push(path.slice(0));
// //     }
// //     if (root.left != null) {
// //         dfsFind(root.left, expectNumber, path, currentSum, result);
// //     }
 
// //     if (root.right != null) {
// //         dfsFind(root.right, expectNumber, path, currentSum, result);
// //     }
 
// //     path.pop();
// // }
// function Clone(pHead) {
// 	if (pHead === null) {
// 	  return null;
// 	}
// 	cloneNodes(pHead);
// 	cloneRandom(pHead);
// 	return reconnetNodes(pHead);
//   }

//   function cloneNodes(pHead) {
// 	var current = pHead;
// 	while (current) {
// 	  var cloneNode = {
// 		label: current.label,
// 		next: current.next
// 	  };
// 	  current.next = cloneNode;
// 	  current = cloneNode.next;
// 	}
//   }

//   function cloneRandom(pHead) {
// 	var current = pHead;
// 	while (current) {
// 	  var cloneNode = current.next;
// 	  if (current.random) {
// 		cloneNode.random = current.random.next;
// 	  } else {
// 		cloneNode.random = null;
// 	  }
// 	  current = cloneNode.next;
// 	}
//   }

//   function reconnetNodes(pHead) {
// 	var cloneHead = pHead.next;
// 	var cloneNode = pHead.next;
// 	var current = pHead;
// 	while (current) {
// 	  current.next = cloneNode.next;
// 	  current = cloneNode.next;
// 	  if (current) {
// 		cloneNode.next = current.next;
// 		cloneNode = current.next;
// 	  } else {
// 		cloneNode.next = null;
// 	  }
// 	}
// 	return cloneHead;
//   }

//   function Convert(pRootOfTree) {
// 	if (!pRootOfTree) {
// 	  return null;
// 	}
// 	ConvertCore(pRootOfTree);
// 	var pHead=null;
// 	while (pHead!=null||pRootOfTree.left) {
// 	  pHead = pRootOfTree.left;
// 	}
// 	return pHead;
//   }

//   function ConvertCore(node, last) {
// 	if (node.left) {
// 	  last = ConvertCore(node.left, last)
// 	}
// 	node.left = last;
// 	if (last) {
// 	  last.right = node;
// 	}
// 	last = node;
// 	if (node.right) {
// 	  last = ConvertCore(node.right, last);
// 	}
// 	return last;
//   }


//   function Serialize(pRoot, arr = []) {
// 	if (!pRoot) {
// 	  arr.push('#');
// 	} else {
// 	  arr.push(pRoot.val);
// 	  Serialize(pRoot.left, arr)
// 	  Serialize(pRoot.right, arr)
// 	}
// 	return arr.join(',');
//   }

//   function Deserialize(s) {
// 	if (!s) {
// 	  return null;
// 	}
// 	return deserialize(s.split(','));
//   }

//   function deserialize(arr) {
// 	let node = null;
// 	const current = arr.shift();
// 	if (current !== '#') {
// 	  node = { val: current }
// 	  node.left = deserialize(arr);
// 	  node.right = deserialize(arr);
// 	}
// 	return node;
var str='abcde'
for(var i=0;i<str.length;i++){
var  newStr=str.slice(0)}
var arr=[1,2,3,4]
var newArr=arr.slice(0,arr.length-1)
console.log(newStr);
console.log(newArr);

