function createTreeDirectory(tree) {
	// console.log(tree)
    let arr = []
	let obj = {}
	let i = 0
	// root
    let current = tree
	if(tree) {
		arr.push([])
        current = current.left
	} else {
		return "Tree empty"
	}
    const leftArr = []
    const rightArr = []

    if(current.left){
        while(current){
            leftArr.push(current.value)
            console.log(current)
            current = current.left
        }
        current = tree.right
    }
    if(current.right){
        while(current){
            rightArr.push(current.value)
            current = current.right
        }
    }
      // console.log(arr, leftArr, rightArr)
}
// const bst = {
// 	value: 5,
// 	left: {
// 		value: 3,
// 		left: {
// 			value: 1,
// 			left: null,
// 			right: null
// 		},
// 		right: {
// 			value: 4,
// 			left: null,
// 			right: null
// 		}
// 	},
// 	right: {
// 		value: 7,
// 		left: {
// 			value: 6,
// 			left: null,
// 			right: null
// 		},
// 		right: {
// 			value: 9,
// 			left: null,
// 			right: null
// 		}
// 	}
// }
const tree = {
  value: 5
  children: [
    {
      value: 4,
      children: []
    },
    {
      value: 7,
      children: [
        {
          value: 3,
          children: []
        },
        {
          value: 15,
          children: []
        }
      ]
    }
  ]
}

createTreeDirectory(bst)
