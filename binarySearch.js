function binarySearch(arr, k) {

	function mergeSort(arr) {
		if(arr.length < 2) {
			return arr
		}
		let len = arr.length
		let middle = Math.floor(len / 2)

		let leftSide = arr.slice(0, middle)
		let rightSide = arr.slice(middle, len)

		// console.log(leftSide)
		// console.log(rightSide)
		let mergeSortLeft = mergeSort(leftSide)
		let mergeSortRight = mergeSort(rightSide)
		return stitch(mergeSortLeft, mergeSortRight)
	}

	function stitch(left, right) {
		var results = []
		while(left.length && right.length) {
			if(left[0] <= right[0]) {
				results.push(left.shift());
			} else {
				results.push(right.shift());
			}

		}
		return [...results, ...left, ...right]
	}

	function search(sortedList, val) {
		let start = 0
		let end = sortedList.length - 1
		let mid = Math.floor(start + end / 2)
		while(sortedList[mid] !== val && start < end) {
			if(val < sortedList[mid]) {
				end = mid - 1
			} else {
				start = mid + 1
			}
			mid = Math.floor((start + end) / 2)
		}
		console.log('val', val)
		console.log((sortedList[mid] !== val) ? -1 : mid)
		return (sortedList[mid] !== val) ? false : true
	}
	return search(mergeSort(arr), k)
	// return mergeSort([10, 3, 1, 202, 133, 43, 33])
}

console.log(binarySearch([10, 3, 1, 202, 133, 43, 33], 33))
//
// // Complete the findNumber function below.
// function findNumber(arr, k) {
// 	if(arr.length < 2) {
// 		return arr
// 	}
// 	let len = arr.length
// 	let middle = Math.floor(len / 2)
//
// 	let leftSide = arr.slice(0, middle)
// 	let rightSide = arr.slice(middle, len)
//
//
// 	let mergeSortLeft = findNumber(leftSide)
// 	let mergeSortRight = findNumber(rightSide)
//
// 	console.log(stitch(mergeSortLeft, mergeSortRight))
// 	return binarySearch(stitch(mergeSortLeft, mergeSortRight))
//
//
// 	function stitch(left, right) {
// 		var results = []
// 		while(left.length && right.length) {
// 			if(left[0] <= right[0]) {
// 				results.push(left.shift())
// 			} else {
// 				results.push(right.shift())
// 			}
// 		}
// 		return [...results, ...left, ...right]
// 	}
//
// 	function binarySearch(sortedList) {
// 		console.log('run')
// 		let start = 0
// 		let end = sortedList.length - 1
// 		let mid = Math.floor(start + end / 2)
//
// 		console.log("middle", middle)
// 	}
// 	console.log('FF')
// }
//
// console.log('find', findNumber([10, 3, 1, 202, 133, 43, 33], 33))